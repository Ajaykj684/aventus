// import PropTypes from 'prop-types'
// import React, { useEffect, useState, createRef } from 'react'
// import classNames from 'classnames'
// import { CRow, CCol, CCard, CCardHeader, CCardBody } from '@coreui/react'
// import { rgbToHex } from '@coreui/utils'
// import { DocsLink } from 'src/components'

// const ThemeView = () => {
//   const [color, setColor] = useState('rgb(255, 255, 255)')
//   const ref = createRef()

//   useEffect(() => {
//     const el = ref.current.parentNode.firstChild
//     const varColor = window.getComputedStyle(el).getPropertyValue('background-color')
//     setColor(varColor)
//   }, [ref])

//   return (
//     <table className="table w-100" ref={ref}>
//       <tbody>
//         <tr>
//           <td className="text-medium-emphasis">HEX:</td>
//           <td className="font-weight-bold">{rgbToHex(color)}</td>
//         </tr>
//         <tr>
//           <td className="text-medium-emphasis">RGB:</td>
//           <td className="font-weight-bold">{color}</td>
//         </tr>
//       </tbody>
//     </table>
//   )
// }

// const ThemeColor = ({ className, children }) => {
//   const classes = classNames(className, 'theme-color w-75 rounded mb-3')
//   return (
//     <CCol xs={12} sm={6} md={4} xl={2} className="mb-4">
//       <div className={classes} style={{ paddingTop: '75%' }}></div>
//       {children}
//       <ThemeView />
//     </CCol>
//   )
// }

// ThemeColor.propTypes = {
//   children: PropTypes.node,
//   className: PropTypes.string,
// }

import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'datatables.net-dt/js/dataTables.dataTables'
import 'datatables.net-dt/css/jquery.dataTables.min.css'
import $ from 'jquery'

const Colors = () => {
  // const [color, setColor] = useState('rgb(255, 255, 255)')
  // const ref = createRef()

  useEffect(() => {
    $(document).ready(function () {
      $('#example').DataTable()
    })
  }, [])

  return (
    <>
      <div className="MainDiv">
        <div className="jumbotron text-center bg-sky">
          <h3>Employees</h3>
        </div>
        <div className="container">
          <table id="example" className="display">
            <thead>
              <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Age</th>
                <th>Start date</th>
                <th>Salary</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tiger Nixon</td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/04/25</td>
                <td>$320,800</td>
              </tr>
              <tr>
                <td>Garrett Winters</td>
                <td>Accountant</td>
                <td>Tokyo</td>
                <td>63</td>
                <td>2011/07/25</td>
                <td>$170,750</td>
              </tr>
              <tr>
                <td>Ashton Cox</td>
                <td>Junior Technical Author</td>
                <td>San Francisco</td>
                <td>66</td>
                <td>2009/01/12</td>
                <td>$86,000</td>
              </tr>
              <tr>
                <td>Tiger Nixon</td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/04/25</td>
                <td>$320,800</td>
              </tr>
              <tr>
                <td>Garrett Winters</td>
                <td>Accountant</td>
                <td>Tokyo</td>
                <td>63</td>
                <td>2011/07/25</td>
                <td>$170,750</td>
              </tr>
              <tr>
                <td>Ashton Cox</td>
                <td>Junior Technical Author</td>
                <td>San Francisco</td>
                <td>66</td>
                <td>2009/01/12</td>
                <td>$86,000</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Age</th>
                <th>Start date</th>
                <th>Salary</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </>
  )
}

export default Colors

// import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'jquery/dist/jquery.min.js'
// import 'datatables.net-dt/js/dataTables.dataTables'
// import 'datatables.net-dt/css/jquery.dataTables.min.css'
// import $ from 'jquery'

// class Colors extends React.Component {
//   componentDidMount() {
//     //initialize datatable
//     $(document).ready(function () {
//       $('#example').DataTable()
//     })
//   }
//   render() {
//     return (
//       <div className="MainDiv">
//         <div className="jumbotron text-center bg-sky">
//           <h3>Therichpost.com</h3>
//         </div>
//         <div className="container">
//           <table id="example" className="display">
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Position</th>
//                 <th>Office</th>
//                 <th>Age</th>
//                 <th>Start date</th>
//                 <th>Salary</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>Tiger Nixon</td>
//                 <td>System Architect</td>
//                 <td>Edinburgh</td>
//                 <td>61</td>
//                 <td>2011/04/25</td>
//                 <td>$320,800</td>
//               </tr>
//               <tr>
//                 <td>Garrett Winters</td>
//                 <td>Accountant</td>
//                 <td>Tokyo</td>
//                 <td>63</td>
//                 <td>2011/07/25</td>
//                 <td>$170,750</td>
//               </tr>
//               <tr>
//                 <td>Ashton Cox</td>
//                 <td>Junior Technical Author</td>
//                 <td>San Francisco</td>
//                 <td>66</td>
//                 <td>2009/01/12</td>
//                 <td>$86,000</td>
//               </tr>
//             </tbody>
//             <tfoot>
//               <tr>
//                 <th>Name</th>
//                 <th>Position</th>
//                 <th>Office</th>
//                 <th>Age</th>
//                 <th>Start date</th>
//                 <th>Salary</th>
//               </tr>
//             </tfoot>
//           </table>
//         </div>
//       </div>
//     )
//   }
// }
// export default Colors
