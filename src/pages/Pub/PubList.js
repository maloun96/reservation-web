import React, { Fragment } from 'react';
import Breadcrumb from "../../components/common/breadcrumb";
import {Link} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

const PubList = () => {
  const pubs = useSelector(content => content.Pub.pubs);

  return (
    <Fragment>
      <Breadcrumb title="Sizing tables" />
      <button className="btn btn-primary ml-3 mb-4" type="button">
        <Link to="/pubs/add" >Add new pub</Link>
      </button>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <h5>List of pubs</h5>
              </div>
              <div className="table-responsive">
                <table className="table table-de">
                  <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Latitude</th>
                    <th scope="col">Longitude</th>
                    <th scope="col">Website</th>
                    <th scope="col">Facebook</th>
                    <th scope="col">Instagram</th>
                    <th scope="col">Actions</th>
                  </tr>
                  </thead>
                  <tbody>
                  {pubs.map((pub, index) => (
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{pub.name}</td>
                      <td>{pub.latitude}</td>
                      <td>{pub.longitude}</td>
                      <td>{pub.website}</td>
                      <td>{pub.facebook}</td>
                      <td>{pub.instagram}</td>
                      <td>BUTTONS</td>
                    </tr>
                  ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PubList;
