import { FiCircle } from 'react-icons/fi';

const cities = [
  'Ariyalur', 'Chengalpattu', 'Chennai', 'Coimbatore', 'Cuddalore', 'Dharmapuri', 'Dindigul', 'Kanchipuram', 'Kanyakumari',
  'Karur', 'Krishnagiri', 'Madurai', 'Nagapattinam', 'Namakkal', 'Perambalur', 'Pudukkottai', 'Ramanathapuram', 'Salem',
  'Sivaganga', 'Thanjavur', 'Theni', 'Nilgiris', 'Ooty', 'Thiruvallur', 'Thiruvarur', 'Thoothukkudi', 'Trichy',
  'Tirunelveli', 'Tiruppur', 'Tiruvannamalai', 'Vellore', 'Viluppuram', 'Virudhunagar', 'Bangalore', 'Tirupati', 'Pondicherry',
  'Ranipet', 'Tenkasi', 'Thoothukudi', 'Tirupathur', 'Tiruvallur', 'Tiruvarur', 'Erode', 'Kallakurichi',
];

const columns = 5;
const getColumns = () => {
  // Split cities into N columns for desktop, fewer for mobile
  const colCount = columns;
  const perCol = Math.ceil(cities.length / colCount);
  return Array.from({ length: colCount }, (_, i) => cities.slice(i * perCol, (i + 1) * perCol));
};

export default function Cities() {
  const cityColumns = getColumns();
  return (
    <section className="w-full py-10 px-2 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-gray-700">
          One Way Taxi Service in <span className="text-orange-600 font-bold">Cities</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {cityColumns.map((col, i) => (
            <ul key={i} className="space-y-3">
              {col.map(city => (
                <li key={city} className="flex items-center gap-2 text-base md:text-lg text-gray-900 font-semibold">
                  <FiCircle className="text-orange-500" style={{ strokeWidth: 2, minWidth: 20, minHeight: 20 }} />
                  <span>{city}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
} 