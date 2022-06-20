import Navbar from './Navbar'
import Footer from '../Components/Footer'
import Profil from '../img/Me2.jpeg'
// import Logo from '../img/Me1.jpg'
import Logo from '../img/Logo.Zumi.png'

const people = [
  {
    name: 'Revan Permana',
    title: 'WEB Developer',
    // department: 'Optimization',
    role: 'Owner',
    email: 'refapermana0805@gmail.com',
     image:
       Profil,
  },
  // More people...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <>
  <Navbar />

    {/* Main & Header */}
    {/* <header className="bg-gray-500 shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">About Me</h1>
      </div>
    </header> */}

    <main className='bg-black'>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 ">
            {/* Replace with your content */}
            {/* <div className="px-4 py-6 sm:px-0">
              <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
            </div> */}
            {/* /End replace */}

            {/* About Me */}

            {/* Flex img & span kalimat */}
            <div className="flex flex-row-reverse mt-3 bg-dark-grayish-blue">
              <div className="relative px-5">
                <img src={Logo} width="700px" height="700px" className="rounded-xl" />
              </div>
                <div className="text-justify relative px-10 mt-9 ">
                  <span className="text-white">
                  Zumii.Store adalah Pelopor Platform Top-Up Game Termurah di Indonesia. berdiri sejak Mei 2019. memiliki 1.000+ Customer Aktif dan 20+ Reseller yang sudah bergabung menjadi Mitra Reseller Zumii.Store. selain itu Zumii.Store telah mendapat Rekomendasi dari beberapa Player E-Sports seperti BTR_Mayden, ONIC_Gummy, AURA_Cimbruutt dan Influencer Player lainnya. Keberadaan Zumii.Store ini diharapkan dapat mempermudah Anda untuk medapatkan Layanan Top-Up Game dengan Harga terjangkau, Aman dan Terpercaya.
                
                  <br />
              
                  
                  
                  </span>
                </div>
            </div>

                          
            <div className="text-justify relative px-5 mt-3 text-white bg-dark-grayish-blue">
                <span >
                Seiring dengan berkembangnya teknologi, maka kami mencoba berinovasi dalam berbisnis. salah satu bentuk inovasinya adalah dengan menyediakan layanan toko kami melalui media Internet, dan Zumii.Store adalah salah satu bentuk layanan kami kepada Anda. Dalam memberi layanan kami selalu mencoba memberi persembahan terbaik kepada pelanggan, selain itu kami juga selalu menjunjung tinggi nilai-nilai etika yang baik seperti kejujuran, ketepatan, dan professionalitas dalam Memaksimalkan Pelayanan.
                
                </span>
                
            </div>
            
            {/* Table */}
            <div className="flex flex-col mt-10 bg-red-700">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-slightlygray text-white">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium  text-white uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                  >
                    Role
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {people.map((person) => (
                  <tr key={person.email}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{person.name}</div>
                          <div className="text-sm text-gray-500">{person.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 ">{person.title}</div>
                      <div className="text-sm text-gray-500">{person.department}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2  inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Active
                      </span>
                    </td>
                    <td className="px-6  py-4 whitespace-nowrap text-sm text-gray-500 ">{person.role}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      {/* <a href="#" className="text-indigo-600 hover:text-indigo-900">
                        Edit
                      </a> */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

          </div>
        </main>

 

      {/* footer */}
      <Footer />
    </>
  )
}