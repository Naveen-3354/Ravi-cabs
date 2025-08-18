import { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaArrowLeft } from "react-icons/fa";
import AutocompleteComponent from "./AutocompleteSecond";
import { LoadScript } from "@react-google-maps/api";

const libraries = ["places"];

const Form = ({ activeTab, setActiveTab, toast }) => {
  const [formData, setFormData] = useState({
    vehicleType: "",
    fullName: "",
    email: "",
    mobileNumber: "",
    pickupLocation: "",
    dropLocation: "",
    date: "",
    time: "",
    airport: "",
    hotelAddress: "",
    returnDate: "",
    pickupTime: "",
    distance: "",
    price: "",
    time: "",
    tripType: "",
    ratePerKm: "",
  });
  const [errors, setErrors] = useState({});
  const [showEstimation, setShowEstimation] = useState(false);
  const [minReturnDate, setMinReturnDate] = useState("");
  const [location1, setLocation1] = useState(null);
  const [location2, setLocation2] = useState(null);
  const [distance, setDistance] = useState(null);
  const [time, setTime] = useState(null);
  const [autocomplete1, setAutocomplete1] = useState(null);
  const [autocomplete2, setAutocomplete2] = useState(null);
  const [calculatedPrice, setCalculatedPrice] = useState(null);
  const [distanceInKm, setDistanceInKm] = useState(null);

  const pricingConfig = {
    Sedan: { oneWay: 14, roundTrip: 13 },
    SUV: { oneWay: 19, roundTrip: 18 },
    Innova: { oneWay: 29, roundTrip: 19 },
    Etios: { oneWay: 15, roundTrip: 13 },
  };

  useEffect(() => {
    if (formData.date) {
      const date = new Date(formData.date);
      date.setDate(date.getDate() + 1);
      setMinReturnDate(date.toISOString().split("T")[0]);
    } else {
      setMinReturnDate("");
    }
  }, [formData.date]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "mobileNumber") {
      if (value.length > 10) return;
      if (!/^\d*$/.test(value)) return;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.vehicleType)
      newErrors.vehicleType = "Vehicle type is required";
    if (!formData.fullName) newErrors.fullName = "Full name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!formData.mobileNumber) {
      newErrors.mobileNumber = "Mobile number is required";
    } else if (formData.mobileNumber.length !== 10) {
      newErrors.mobileNumber = "Mobile number must be 10 digits";
    }

    if (activeTab === "oneWay" || activeTab === "roundTrip") {
      if (!formData.pickupLocation)
        newErrors.pickupLocation = "Pickup location is required";
      if (!formData.dropLocation)
        newErrors.dropLocation = "Drop location is required";
      if (!formData.date) newErrors.date = "Date is required";
      if (!formData.time && activeTab === "oneWay")
        newErrors.time = "Time is required";
    }

    if (activeTab === "roundTrip") {
      if (!formData.returnDate)
        newErrors.returnDate = "Return date is required";
      if (!formData.pickupTime)
        newErrors.pickupTime = "Pickup time is required";
    }

    if (activeTab === "airportTaxi") {
      if (!formData.pickupLocation)
        newErrors.pickupLocation = "Pickup location is required";
      if (!formData.dropLocation)
        newErrors.dropLocation = "Drop location is required";
      if (!formData.date) newErrors.date = "Pickup date is required";
      if (!formData.time) newErrors.time = "Pickup time is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleConfirmBooking = async () => {
    const rawData = localStorage.getItem("bookingFormData");

    const data = JSON.parse(rawData);
    try {
      const response = await fetch(
        import.meta.env.VITE_DEV_API_URL + "/book-now",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send booking request");
      }

      const result = await response.json();
    } catch (error) {
      window.location.reload();
    } finally {
      localStorage.removeItem("bookingFormData");
      setShowEstimation(false);
      setFormData(initialValues);
      window.location.reload();
    }
  };

  const handleBackToForm = () => {
    setShowEstimation(false);
  };

  const handlePlaceChanged1 = () => {
    if (autocomplete1 !== null) {
      const place = autocomplete1.getPlace();
      const lat = place.geometry?.location?.lat();
      const lng = place.geometry?.location?.lng();
      if (lat && lng) {
        setLocation1({ lat, lng });
        setFormData((prev) => ({
          ...prev,
          pickupLocation: place.formatted_address || place.name,
        }));
      }
    }
  };

  const handlePlaceChanged2 = () => {
    if (autocomplete2 !== null) {
      const place = autocomplete2.getPlace();
      const lat = place.geometry?.location?.lat();
      const lng = place.geometry?.location?.lng();
      if (lat && lng) {
        setLocation2({ lat, lng });
        setFormData((prev) => ({
          ...prev,
          dropLocation: place.formatted_address || place.name,
        }));
      }
    }
  };

  const calculateRouteDistance = async (origin, destination) => {
    const directionsService = new window.google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: new window.google.maps.LatLng(origin.lat, origin.lng),
      destination: new window.google.maps.LatLng(
        destination.lat,
        destination.lng
      ),
      travelMode: window.google.maps.TravelMode.DRIVING,
    });

    return {
      distance: results.routes[0].legs[0].distance.text,
      time: results.routes[0].legs[0].duration.text,
    };
  };

  const parseDistance = (distanceText) => {
    // Extract numeric value from distance text (e.g., "334 km" -> 334)
    const match = distanceText.match(/(\d+(?:\.\d+)?)/);
    return match ? parseFloat(match[1]) : 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fill all required fields correctly");
      return;
    }
    if (location1 && location2) {
      try {
        const data = formData;
        const result = await calculateRouteDistance(location1, location2);
        setDistance(result.distance);
        setTime(result.time);
        let distance = parseInt(result.distance);
        if (activeTab === "roundTrip") {
          distance *= 2;
        }
        let distanceKm = distance + " Km";

        setDistanceInKm(distanceKm);

        let activeTabIs = activeTab;
        const pricing = pricingConfig[formData.vehicleType];

        let price = 0;
        let ratePerKm = 0;

        if (activeTab === "roundTrip") {
          ratePerKm = pricing.roundTrip;
          price = distance * ratePerKm;
          if (distance <= 400) {
            price += 500;
          } else {
            price += 600;
          }
        } else {
          ratePerKm = pricing.oneWay;
          price = distance * ratePerKm;
          price += 400;
        }

        setCalculatedPrice(price);

        formData.distance = distanceKm;
        formData.time = result.time;
        formData.tripType = activeTab;
        formData.price = "Rs " + price;
        formData.ratePerKm = ratePerKm;

        localStorage.setItem("bookingFormData", JSON.stringify(formData));

        setShowEstimation(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } catch (error) {
        console.error("Error calculating route:", error);
        toast.error("Error calculating route. Please try again.");
      }
    } else {
      setShowEstimation(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (showEstimation) {
    return (
      <div className="mt-8 rounded-xl text-white p-4 md:p-6 w-full max-w-xl relative z-20 border border-gray-700/50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/highway_1.jpg')] bg-cover bg-center opacity-20 z-0"></div>

        <div className="relative z-10">
          <h3 className="text-xl font-semibold mb-4">Trip Estimation</h3>

          <div className="bg-white/5 rounded-lg p-4 mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-300">Selected Car Type:</span>
              <span className="font-medium">
                {formData.vehicleType || "Not Selected"}
              </span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-300">Name:</span>
              <span className="font-medium">
                {formData.fullName || "Not specified"}
              </span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-300">Email:</span>
              <span className="font-medium">
                {formData.email || "Not specified"}
              </span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-300">Total Distance:</span>
              <span className="font-medium">
                {distance || "Calculating..."}
              </span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-300">Total Duration:</span>
              <span className="font-medium">{time || "Calculating..."}</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-300">Rate Per Km:</span>
              <span className="font-medium">
                Rs.{" "}
                {formData.vehicleType && pricingConfig[formData.vehicleType]
                  ? activeTab === "roundTrip"
                    ? pricingConfig[formData.vehicleType].roundTrip
                    : pricingConfig[formData.vehicleType].oneWay
                  : "N/A"}
              </span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-300">Estimated Amount:</span>
              <span className="font-medium">
                {calculatedPrice
                  ? `Rs. ${calculatedPrice.toFixed(0)}`
                  : "Calculating..."}
              </span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-300">Pickup Location:</span>
              <span className="font-medium">
                {formData.pickupLocation || "Not specified"}
              </span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-300">Drop Location:</span>
              <span className="font-medium">
                {formData.dropLocation || "Not specified"}
              </span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-300">Date:</span>
              <span className="font-medium">
                {formData.date || "Not specified"}
              </span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-300">Time:</span>
              <span className="font-medium">
                {formData.time || formData.pickupTime || "Not specified"}
              </span>
            </div>
          </div>

          <div className="text-xs text-primary-400 mb-6">
            Note: Toll Gate and State Permit are extra
          </div>

          <div className="space-y-4 mb-6">
            <button
              className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-primary-600 hover:to-primary-700 transition-all duration-200"
              onClick={handleConfirmBooking}
            >
              Confirm Booking
            </button>
            <button
              className="text-primary-400 text-sm underline flex items-center gap-1"
              onClick={handleBackToForm}
            >
              <FaArrowLeft className="inline" /> Back to Form
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 rounded-xl text-white p-4 md:p-6 w-full max-w-xl relative z-20 border border-gray-700/50 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('/images/highway_1.jpg')] bg-cover bg-center opacity-20 z-0"></div>

      {/* Material UI Style Tabs */}
      <div className="relative mb-8">
        {/* Tab Indicator */}
        <div
          className="absolute bottom-0 left-0 h-0.5 bg-primary-500 transition-all duration-300 ease-in-out"
          style={{
            width:
              activeTab === "oneWay"
                ? "33.33%"
                : activeTab === "roundTrip"
                ? "33.33%"
                : "33.33%",
            transform: `translateX(${
              activeTab === "oneWay"
                ? "0%"
                : activeTab === "roundTrip"
                ? "100%"
                : "200%"
            })`,
          }}
        ></div>

        {/* Tab Buttons */}
        <div className="flex border-b border-gray-600">
          <button
            type="button"
            onClick={() => setActiveTab("oneWay")}
            className={`flex-1 px-4 py-3 text-sm font-medium transition-all duration-200 relative ${
              activeTab === "oneWay"
                ? "text-primary-500"
                : "text-gray-400 hover:text-gray-300"
            }`}
          >
            One Way
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("roundTrip")}
            className={`flex-1 px-4 py-3 text-sm font-medium transition-all duration-200 relative ${
              activeTab === "roundTrip"
                ? "text-primary-500"
                : "text-gray-400 hover:text-gray-300"
            }`}
          >
            Round Trip
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("airportTaxi")}
            className={`flex-1 px-4 py-3 text-sm font-medium transition-all duration-200 relative ${
              activeTab === "airportTaxi"
                ? "text-primary-500"
                : "text-gray-400 hover:text-gray-300"
            }`}
          >
            Airport Taxi
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {/* One Way Tab */}
        {activeTab === "oneWay" && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  Vehicle Type
                </label>
                <div className="relative">
                  <select
                    name="vehicleType"
                    value={formData.vehicleType}
                    onChange={handleChange}
                    className={`w-full bg-white/10 border ${
                      errors.vehicleType ? "border-red-500" : "border-gray-600"
                    } text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 appearance-none pr-10`}
                  >
                    <option value="" className="bg-gray-800 text-white">
                      Select vehicle type
                    </option>
                    <option
                      value="Sedan"
                      className="bg-gray-800 text-white flex items-center gap-2"
                    >
                      Sedan
                    </option>
                    <option
                      value="SUV"
                      className="bg-gray-800 text-white flex items-center gap-2"
                    >
                      SUV
                    </option>
                    <option
                      value="Innova"
                      className="bg-gray-800 text-white flex items-center gap-2"
                    >
                      Innova
                    </option>
                    <option
                      value="Etios"
                      className="bg-gray-800 text-white flex items-center gap-2"
                    >
                      Etios
                    </option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
                {errors.vehicleType && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.vehicleType}
                  </p>
                )}
              </div>
              <div className="relative">
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className={`w-full bg-white/10 border ${
                    errors.fullName ? "border-red-500" : "border-gray-600"
                  } text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 placeholder-gray-400`}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
                )}
              </div>
            </div>

            {/* Email full-width row after vehicle type and name */}
            <div className="grid grid-cols-1 gap-4">
              <div className="relative">
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className={`w-full bg-white/10 border ${
                    errors.email ? "border-red-500" : "border-gray-600"
                  } text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 placeholder-gray-400`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  placeholder="Enter mobile number"
                  className={`w-full bg-white/10 border ${
                    errors.mobileNumber ? "border-red-500" : "border-gray-600"
                  } text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 placeholder-gray-400`}
                  maxLength="10"
                />
                {errors.mobileNumber && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.mobileNumber}
                  </p>
                )}
              </div>
              <div className="relative">
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  Pickup Location
                </label>
                <LoadScript
                  googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
                  libraries={libraries}
                >
                  <AutocompleteComponent
                    onLoad={setAutocomplete1}
                    onPlaceChanged={handlePlaceChanged1}
                    placeholder="Enter pickup location"
                  />
                </LoadScript>
                {errors.pickupLocation && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.pickupLocation}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  Drop Location
                </label>
                <LoadScript
                  googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
                  libraries={libraries}
                >
                  <AutocompleteComponent
                    onLoad={setAutocomplete2}
                    onPlaceChanged={handlePlaceChanged2}
                    placeholder="Enter drop location"
                  />
                </LoadScript>
                {errors.dropLocation && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.dropLocation}
                  </p>
                )}
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="relative">
                  <label className="block text-xs font-medium text-gray-300 mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className={`w-full bg-white/10 border ${
                      errors.date ? "border-red-500" : "border-gray-600"
                    } text-white px-3 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200`}
                  />
                  {errors.date && (
                    <p className="text-red-500 text-xs mt-1">{errors.date}</p>
                  )}
                </div>
                <div className="relative">
                  <label className="block text-xs font-medium text-gray-300 mb-1">
                    Time
                  </label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className={`w-full bg-white/10 border ${
                      errors.time ? "border-red-500" : "border-gray-600"
                    } text-white px-3 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200`}
                  />
                  {errors.time && (
                    <p className="text-red-500 text-xs mt-1">{errors.time}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Round Trip Tab */}
        {activeTab === "roundTrip" && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  Vehicle Type
                </label>
                <div className="relative">
                  <select
                    name="vehicleType"
                    value={formData.vehicleType}
                    onChange={handleChange}
                    className={`w-full bg-white/10 border ${
                      errors.vehicleType ? "border-red-500" : "border-gray-600"
                    } text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 appearance-none pr-10`}
                  >
                    <option value="" className="bg-gray-800 text-white">
                      Select vehicle type
                    </option>
                    <option
                      value="Sedan"
                      className="bg-gray-800 text-white flex items-center gap-2"
                    >
                      Sedan
                    </option>
                    <option
                      value="SUV"
                      className="bg-gray-800 text-white flex items-center gap-2"
                    >
                      SUV
                    </option>
                    <option
                      value="Innova"
                      className="bg-gray-800 text-white flex items-center gap-2"
                    >
                      Innova
                    </option>
                    <option
                      value="Etios"
                      className="bg-gray-800 text-white flex items-center gap-2"
                    >
                      Etios
                    </option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
                {errors.vehicleType && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.vehicleType}
                  </p>
                )}
              </div>
              <div className="relative">
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className={`w-full bg-white/10 border ${
                    errors.fullName ? "border-red-500" : "border-gray-600"
                  } text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 placeholder-gray-400`}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
                )}
              </div>
            </div>

            {/* Email full-width row after vehicle type and name */}
            <div className="grid grid-cols-1 gap-4">
              <div className="relative">
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className={`w-full bg-white/10 border ${
                    errors.email ? "border-red-500" : "border-gray-600"
                  } text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 placeholder-gray-400`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  placeholder="Enter mobile number"
                  className={`w-full bg-white/10 border ${
                    errors.mobileNumber ? "border-red-500" : "border-gray-600"
                  } text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 placeholder-gray-400`}
                  maxLength="10"
                />
                {errors.mobileNumber && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.mobileNumber}
                  </p>
                )}
              </div>
              <div className="relative">
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  Pickup Location
                </label>
                <LoadScript
                  googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
                  libraries={libraries}
                >
                  <AutocompleteComponent
                    onLoad={setAutocomplete1}
                    onPlaceChanged={handlePlaceChanged1}
                    placeholder="Enter pickup location"
                  />
                </LoadScript>
                {errors.pickupLocation && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.pickupLocation}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  Drop Location
                </label>
                <LoadScript
                  googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
                  libraries={libraries}
                >
                  <AutocompleteComponent
                    onLoad={setAutocomplete2}
                    onPlaceChanged={handlePlaceChanged2}
                    placeholder="Enter drop location"
                  />
                </LoadScript>
                {errors.dropLocation && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.dropLocation}
                  </p>
                )}
              </div>
              <div className="relative">
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  Pickup Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className={`w-full bg-white/10 border ${
                    errors.date ? "border-red-500" : "border-gray-600"
                  } text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200`}
                />
                {errors.date && (
                  <p className="text-red-500 text-xs mt-1">{errors.date}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  Pickup Time
                </label>
                <input
                  type="time"
                  name="pickupTime"
                  value={formData.pickupTime}
                  onChange={handleChange}
                  className={`w-full bg-white/10 border ${
                    errors.pickupTime ? "border-red-500" : "border-gray-600"
                  } text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200`}
                />
                {errors.pickupTime && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.pickupTime}
                  </p>
                )}
              </div>
              <div className="relative">
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  Return Date
                </label>
                <input
                  type="date"
                  name="returnDate"
                  value={formData.returnDate}
                  onChange={handleChange}
                  min={minReturnDate}
                  disabled={!formData.date}
                  className={`w-full bg-white/10 border ${
                    errors.returnDate ? "border-red-500" : "border-gray-600"
                  } text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 ${
                    !formData.date ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                />
                {errors.returnDate && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.returnDate}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Airport Taxi Tab */}
        {activeTab === "airportTaxi" && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  Vehicle Type
                </label>
                <div className="relative">
                  <select
                    name="vehicleType"
                    value={formData.vehicleType}
                    onChange={handleChange}
                    className={`w-full bg-white/10 border ${
                      errors.vehicleType ? "border-red-500" : "border-gray-600"
                    } text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 appearance-none pr-10`}
                  >
                    <option value="" className="bg-gray-800 text-white">
                      Select vehicle type
                    </option>
                    <option
                      value="Sedan"
                      className="bg-gray-800 text-white flex items-center gap-2"
                    >
                      Sedan
                    </option>
                    <option
                      value="SUV"
                      className="bg-gray-800 text-white flex items-center gap-2"
                    >
                      SUV
                    </option>
                    <option
                      value="Innova"
                      className="bg-gray-800 text-white flex items-center gap-2"
                    >
                      Innova
                    </option>
                    <option
                      value="Etios"
                      className="bg-gray-800 text-white flex items-center gap-2"
                    >
                      Etios
                    </option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
                {errors.vehicleType && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.vehicleType}
                  </p>
                )}
              </div>
              <div className="relative">
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className={`w-full bg-white/10 border ${
                    errors.fullName ? "border-red-500" : "border-gray-600"
                  } text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 placeholder-gray-400`}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
                )}
              </div>
            </div>

            {/* Email full-width row after vehicle type and name */}
            <div className="grid grid-cols-1 gap-4">
              <div className="relative">
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className={`w-full bg-white/10 border ${
                    errors.email ? "border-red-500" : "border-gray-600"
                  } text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 placeholder-gray-400`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  placeholder="Enter mobile number"
                  className={`w-full bg-white/10 border ${
                    errors.mobileNumber ? "border-red-500" : "border-gray-600"
                  } text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 placeholder-gray-400`}
                  maxLength="10"
                />
                {errors.mobileNumber && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.mobileNumber}
                  </p>
                )}
              </div>
              <div className="relative">
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  Airport
                </label>
                <LoadScript
                  googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
                  libraries={libraries}
                >
                  <AutocompleteComponent
                    onLoad={setAutocomplete1}
                    onPlaceChanged={handlePlaceChanged1}
                    placeholder="Enter pickup location"
                  />
                </LoadScript>
                {errors.pickupLocation && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.pickupLocation}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  Pickup Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className={`w-full bg-white/10 border ${
                    errors.date ? "border-red-500" : "border-gray-600"
                  } text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200`}
                />
                {errors.date && (
                  <p className="text-red-500 text-xs mt-1">{errors.date}</p>
                )}
              </div>
              <div className="relative">
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  Pickup Time
                </label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className={`w-full bg-white/10 border ${
                    errors.time ? "border-red-500" : "border-gray-600"
                  } text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200`}
                />
                {errors.time && (
                  <p className="text-red-500 text-xs mt-1">{errors.time}</p>
                )}
              </div>
            </div>

            <div className="relative">
              <label className="block text-xs font-medium text-gray-300 mb-1">
                Hotel/Destination Address
              </label>
              <LoadScript
                googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
                libraries={libraries}
              >
                <AutocompleteComponent
                  onLoad={setAutocomplete2}
                  onPlaceChanged={handlePlaceChanged2}
                  placeholder="Enter drop location"
                />
              </LoadScript>
              {errors.dropLocation && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.dropLocation}
                </p>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Button */}
      <button
        type="submit"
        className="mt-8 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-primary-600 hover:to-primary-700 transition-all duration-200 w-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
      >
        {activeTab === "oneWay" && "BOOK ONE WAY"}
        {activeTab === "roundTrip" && "BOOK ROUND TRIP"}
        {activeTab === "airportTaxi" && "BOOK AIRPORT TAXI"}
      </button>
    </form>
  );
};

export default Form;
