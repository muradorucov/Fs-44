import { useEffect, useRef, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { createCompany, deleteCompany, getAllCompanies, getSingleCompany, updateCompany } from "../services/suppliers";

function Suppliers() {
  const [suppliers, setSuppliers] = useState([]);
  const [newCompany, setNewCompany] = useState({
    companyName: "",
    contactName: "",
    contactTitle: "",
    street: "",
    city: "",
    region: "",
    postalCode: "",
    country: "",
    phone: ""
  })
  const [selectedCompany, setSelectedCompany] = useState({
    companyName: "",
    contactName: "",
    contactTitle: "",
    street: "",
    city: "",
    region: "",
    postalCode: "",
    country: "",
    phone: ""
  })
  const [isModal, setIsModal] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [selectId, setSelectId] = useState(null);
  const modalRef = useRef(null);
  const editmodalRef = useRef(null);
  const getAllDataFetch = async () => {
    try {
      const data = await getAllCompanies();
      setSuppliers(data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllDataFetch();
  }, [])

  const deleteById = async (id) => {
    try {
      // setSuppliers(suppliers.filter(item => item.id !== id))
      await deleteCompany(id);
      getAllDataFetch();
      // window.location.reload()
    } catch (error) {
      console.log(error);
    }
  }

  const inputHandler = (e) => {
    const { value, name } = e.target;
    setNewCompany({
      ...newCompany,
      [name]: value
    })
  }
  const editInputHandler = (e) => {
    const { value, name } = e.target;
    setSelectedCompany({
      ...selectedCompany,
      [name]: value
    })
  }
  const formSubmit = async (e) => {
    e.preventDefault();
    try {
      await createCompany({
        companyName: newCompany.companyName,
        contactName: newCompany.contactName,
        contactTitle: newCompany.contactTitle,
        address: {
          street: newCompany.street,
          city: newCompany.city,
          region: newCompany.region,
          postalCode: newCompany.postalCode,
          country: newCompany.country,
          phone: newCompany.phone
        }
      })
      getAllDataFetch()
      setIsModal(false)
      e.target.reset();
      setNewCompany({
        companyName: "",
        contactName: "",
        contactTitle: "",
        street: "",
        city: "",
        region: "",
        postalCode: "",
        country: "",
        phone: ""
      })
    } catch (error) {
      console.log(error);
    }
  }
  const editformSubmit = async (e) => {
    e.preventDefault();
    console.log("dhfryfbvn");
    
    try {
      await updateCompany(selectId, {
        companyName: selectedCompany.companyName,
        contactName: selectedCompany.contactName,
        contactTitle: selectedCompany.contactTitle,
        address: {
          street: selectedCompany.street,
          city: selectedCompany.city,
          region: selectedCompany.region,
          postalCode: selectedCompany.postalCode,
          country: selectedCompany.country,
          phone: selectedCompany.phone
        }
      })
      getAllDataFetch()
      setIsUpdate(false)
      e.target.reset();
      selectedCompany({
        companyName: "",
        contactName: "",
        contactTitle: "",
        street: "",
        city: "",
        region: "",
        postalCode: "",
        country: "",
        phone: ""
      })
      selectId(null)
    } catch (error) {
      console.log(error);
    }
  }
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setIsModal(false)
    }
  }
  const closeEditModal = (e) => {
    if (e.target === editmodalRef.current) {
      setIsUpdate(false)
    }
  }
  const openEditModal = async (id) => {
    setIsUpdate(true);
    setSelectId(id)
    try {
      const {
        contactName,
        contactTitle,
        companyName,
        address: {
          street,
          city,
          region,
          postalCode,
          country,
          phone
        }
      } = await getSingleCompany(id);
      setSelectedCompany({
        contactName,
        contactTitle,
        companyName,
        street,
        city,
        region,
        postalCode,
        country,
        phone
      })
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className="my-6">
      <h1 className="text-2xl font-semibold mb-4">Suppliers</h1>
      <div className="flex justify-between items-center gap-4 mb-6">
        <div className="relative w-full max-w-md">
          <input
            type="search"
            placeholder="Axtar..."
            className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            🔍
          </span>
        </div>

        <button
          className="px-5 py-2 rounded-xl bg-blue-600 text-white font-medium shadow-md hover:bg-blue-700 active:scale-95 transition"
          onClick={() => setIsModal(true)}
        >
          + Create
        </button>
      </div>
      <div className="overflow-x-auto rounded-2xl shadow-md">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">Company Name</th>
              <th className="p-3">Contact Name</th>
              <th className="p-3">Contact Title</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {suppliers.map((item) => (
              <tr
                key={item.id}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="p-3">{item.id}</td>
                <td className="p-3">{item.companyName || "UnKnow"}</td>
                <td className="p-3">{item.contactName || "UnKnow"}</td>
                <td className="p-3">{item.contactTitle || "UnKnow"}</td>

                <td className="p-3">
                  <div className="flex justify-center gap-4">
                    <button
                      className="text-blue-500 hover:text-blue-700"
                      onClick={() => openEditModal(item.id)}>
                      <FaEdit />
                    </button>

                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => deleteById(item.id)}
                    >
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* create modal */}
      {
        isModal && <div
          className="fixed inset-0 bg-black/50 backdrop-blur-lg"
          onClick={closeModal}
          ref={modalRef}
        >
          <form className="bg-white p-8 max-w-xl my-10 mx-auto rounded-2xl shadow space-y-4" onSubmit={formSubmit}>
            <h2 className="text-xl font-bold">Create Company</h2>

            <input
              className="w-full border p-2 rounded"
              type="text"
              placeholder="Company Name"
              name="companyName"
              onChange={inputHandler}
            />


            <input
              className="w-full border p-2 rounded"
              type="text"
              placeholder="Contact Name"
              name="contactName"
              onChange={inputHandler}
            />

            <input
              className="w-full border p-2 rounded"
              type="text"
              placeholder="Contact Title"
              name="contactTitle"
              onChange={inputHandler}
            />

            {/* Address */}
            <div className="grid grid-cols-2 gap-3">
              <input
                className="border p-2 rounded col-span-2"
                type="text"
                placeholder="Street"
                name="street"
                onChange={inputHandler}
              />

              <input
                className="border p-2 rounded"
                type="text"
                placeholder="City"
                name="city"
                onChange={inputHandler}
              />

              <input
                className="border p-2 rounded"
                type="text"
                placeholder="Region"
                name="region"
                onChange={inputHandler}
              />

              <input
                className="border p-2 rounded"
                type="number"
                placeholder="Postal Code"
                name="postalCode"
                onChange={inputHandler}
              />

              <input
                className="border p-2 rounded"
                type="text"
                placeholder="Country"
                name="country"
                onChange={inputHandler}
              />

              <input
                className="border p-2 rounded col-span-2"
                type="text"
                placeholder="Phone"
                name="phone"
                onChange={inputHandler}
              />
            </div>

            <button className="bg-black text-white px-4 py-2 rounded w-full">
              Submit
            </button>
          </form>
        </div>
      }
      {/* edit modal */}
      {
        isUpdate && <div
          className="fixed inset-0 bg-black/50 backdrop-blur-lg"
          onClick={closeEditModal}
          ref={editmodalRef}
        >
          <form className="bg-white p-8 max-w-xl my-10 mx-auto rounded-2xl shadow space-y-4" onSubmit={editformSubmit}>
            <h2 className="text-xl font-bold">Update Company</h2>

            <input
              className="w-full border p-2 rounded"
              type="text"
              placeholder="Company Name"
              name="companyName"
              onChange={editInputHandler}
              value={selectedCompany.companyName}
            />


            <input
              className="w-full border p-2 rounded"
              type="text"
              placeholder="Contact Name"
              name="contactName"
              onChange={editInputHandler}
              value={selectedCompany.contactName}
            />

            <input
              className="w-full border p-2 rounded"
              type="text"
              placeholder="Contact Title"
              name="contactTitle"
              onChange={editInputHandler}
              value={selectedCompany.contactTitle}
            />

            {/* Address */}
            <div className="grid grid-cols-2 gap-3">
              <input
                className="border p-2 rounded col-span-2"
                type="text"
                placeholder="Street"
                name="street"
                onChange={editInputHandler}
                value={selectedCompany.street}
              />

              <input
                className="border p-2 rounded"
                type="text"
                placeholder="City"
                name="city"
                onChange={editInputHandler}
                value={selectedCompany.city}
              />

              <input
                className="border p-2 rounded"
                type="text"
                placeholder="Region"
                name="region"
                onChange={editInputHandler}
                value={selectedCompany.region}
              />

              <input
                className="border p-2 rounded"
                type="number"
                placeholder="Postal Code"
                name="postalCode"
                onChange={editInputHandler}
                value={selectedCompany.postalCode}
              />

              <input
                className="border p-2 rounded"
                type="text"
                placeholder="Country"
                name="country"
                onChange={editInputHandler}
                value={selectedCompany.country}
              />

              <input
                className="border p-2 rounded col-span-2"
                type="text"
                placeholder="Phone"
                name="phone"
                onChange={editInputHandler}
                value={selectedCompany.phone}
              />
            </div>

            <button className="bg-black text-white px-4 py-2 rounded w-full">
              Submit
            </button>
          </form>
        </div>
      }
    </div>
  );
}

export default Suppliers;