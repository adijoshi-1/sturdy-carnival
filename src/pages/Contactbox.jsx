import '../assets/styles/contactbox.css'
import { useState } from 'react'
import Swal from 'sweetalert2'
import { Sidebar, Navbar, MainContent } from '../components'
import structure from './structure.json'

export const Contactbox = () => {
  const [data, setData] = useState(structure)

  const appendContact = (formData) => {
    const contactInstance = {
      id: 'uuid',
      type: 'contact',
      data: {
        first_name: formData[0],
        last_name: formData[1],
        city: formData[2],
        email: formData[3],
      },
      timeStamp: '1678883939625',
      publicKey: '32bytespublickey',
    }

    setData((data) => [...data, contactInstance])
    setContact('')
  }

  const popup = async () => {
    const { value: formValues } = await Swal.fire({
      title: 'Add Contact',
      background: '#ddd',
      html:
        '<input id="swal-input1" style="background-color: #eee;" placeholder="First Name" class="swal2-input">' +
        '<input id="swal-input2" style="background-color: #eee;" placeholder="Last Name" class="swal2-input">' +
        '<input id="swal-input3" style="background-color: #eee;" placeholder="City" class="swal2-input">' +
        '<input id="swal-input4" style="background-color: #eee;" placeholder="email" class="swal2-input">',
      focusConfirm: false,
      preConfirm: () => {
        return [
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value,
          document.getElementById('swal-input3').value,
          document.getElementById('swal-input4').value,
        ]
      },
    })

    appendContact(formValues)
  }

  return (
    <>
      <Sidebar />
      <Navbar />
      <MainContent>
        <br />
        <br />
        <button
          className="download-btn"
          onClick={(e) => {
            popup()
          }}
        >
          Add
        </button>
        <div className="table-wrapper">
          <div className="table-wrap">
            <table className="table">
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>City</th>
                <th>Email</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
              {data.map((data) => {
                return data.type === 'contact' ? (
                  <tr id={data.id}>
                    <td>{data.data.first_name}</td>
                    <td>{data.data.last_name}</td>
                    <td>{data.data.city}</td>
                    <td>{data.data.email}</td>
                    <td>
                      <button className="delete-btn">Delete</button>
                    </td>
                    <td>
                      <button className="download-btn">Edit</button>
                    </td>
                  </tr>
                ) : (
                  ''
                )
              })}
            </table>
          </div>
        </div>
      </MainContent>
    </>
  )
}
