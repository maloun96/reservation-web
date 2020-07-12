import React, {Fragment} from 'react';
import Breadcrumb from "../../components/common/breadcrumb";
import CKEditors from "react-ckeditor-component";
import ImageUploader from "react-images-upload";
import { useSelector, useDispatch } from 'react-redux';
import {useFormik} from 'formik';
import {addPub, savePub} from "../../actions/pub.actions";
import * as yup from 'yup';

let schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  description: yup.string().required(),
  latitude: yup.number('Latitude should be number').required('Latitude is required'),
  longitude: yup.number().required('Longitude is required'),
  website: yup.string().url('Should be url'),
  avatar: yup.array().required(),
  images: yup.array().required(),
  facebook: yup.string().url('Should be url'),
  instagram: yup.string().url('Should be url'),
});

const PubAdd = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(content => content.Pub.isLoading);
  const formik = useFormik({
    initialValues: {
      name: 'Victor',
      description: 'Victor',
      latitude: 12.2,
      longitude: 33.33,
      website: 'https://www.google.com',
      facebook: '',
      instagram: '',
      avatar: null,
      images: []
    },
    validationSchema: schema,
    onSubmit: values => {
      dispatch(savePub(values));
    },
  });
  console.log('formik', formik.errors);
  console.log('formik.errors.name', formik.errors.name);
  return (
    <Fragment>
      <Breadcrumb title="Form Default" parent="Form"/>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-xl-12">
            <div className="row">
              <div className="col-sm-12">
                <div className="card">
                  <form className="theme-form needs-validation" onSubmit={formik.handleSubmit}>
                    <div className="card-header">
                      <h5>Add new pub</h5>
                    </div>
                    <div className="card-body">
                      <div className="form-group row form-row">
                        <label className="col-sm-3 col-form-label" htmlFor="name">Name</label>
                        <div className="col-sm-9">
                          <input
                            className="form-control"
                            id="name" type="name"
                            placeholder="Name"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                          />
                          {formik.errors.name && (
                            <>
                              <span>{formik.errors.name || 'First name is required'}</span>
                            </>
                          )}
                        </div>
                      </div>
                      <div className="form-group row form-row">
                        <label className="col-sm-3 col-form-label" htmlFor="avatar">Avatar</label>
                        <div className="col-sm-9">
                          <ImageUploader
                            withIcon={false}
                            withPreview={true}
                            label=""
                            singleImage={true}
                            buttonText="Add avatar"
                            onChange={(e) => {
                              formik.setFieldValue('avatar', e);
                            }}
                            imgExtension={[".jpg", ".gif", ".png", ".gif", ".svg"]}
                            fileSizeError="file size is too big"
                          />
                          <input type="hidden"/>
                          {formik.errors.avatar && (
                            <>
                              <span>{'Select avatar'}</span>
                            </>
                          )}
                        </div>
                      </div>
                      <div className="form-group row form-row">
                        <label className="col-sm-3 col-form-label" htmlFor="description">Description</label>
                        <div className="col-sm-9">
                          <CKEditors
                            activeclassName="p10"
                            content={formik.values.description}
                            events={{
                              // "blur": this.onBlur,
                              // "afterPaste": this.afterPaste,
                              "change": (e, editor) => {
                                formik.setFieldValue('description', e.editor.getData())
                              }
                            }}
                          />
                          <input type="hidden"/>
                          {formik.errors.description && (
                            <>
                              <span>{formik.errors.description || 'Description is required'}</span>
                            </>
                          )}
                        </div>
                      </div>
                      <div className="form-group row form-row">
                        <label className="col-sm-3 col-form-label" htmlFor="latitude">Latitude</label>
                        <div className="col-sm-9">
                          <input
                            className="form-control"
                            id="latitude"
                            type="number"
                            placeholder="Latitude"
                            onChange={formik.handleChange}
                            value={formik.values.latitude}
                          />
                          {formik.errors.latitude && (
                            <>
                              <span>{formik.errors.latitude || 'Latitude is required'}</span>
                            </>
                          )}
                        </div>
                      </div>
                      <div className="form-group row form-row">
                        <label className="col-sm-3 col-form-label" htmlFor="longitude">Longitude</label>
                        <div className="col-sm-9">
                          <input
                            className="form-control"
                            id="longitude"
                            type="number" placeholder="Longitude"
                            onChange={formik.handleChange}
                            value={formik.values.longitude}
                          />
                          {formik.errors.longitude && (
                            <>
                              <span>{formik.errors.longitude || 'Longitude is required'}</span>
                            </>
                          )}
                        </div>
                      </div>
                      <div className="form-group row form-row">
                        <label className="col-sm-3 col-form-label" htmlFor="website">Website</label>
                        <div className="col-sm-9">
                          <input
                            className="form-control"
                            id="Website"
                            name="website"
                            type="url"
                            placeholder="Website"
                            onChange={formik.handleChange}
                            value={formik.values.website}
                          />
                          {formik.errors.website && (
                            <>
                              <span>{formik.errors.website}</span>
                            </>
                          )}
                        </div>
                      </div>
                      <div className="form-group row form-row">
                        <label className="col-sm-3 col-form-label" htmlFor="facebook">Facebook URL</label>
                        <div className="col-sm-9">
                          <input
                            className="form-control"
                            id="facebook"
                            type="url" placeholder="Facebook"
                            onChange={formik.handleChange}
                            value={formik.values.facebook}
                          />
                          {formik.errors.facebook && (
                            <>
                              <span>{formik.errors.facebook}</span>
                            </>
                          )}
                        </div>
                      </div>
                      <div className="form-group row form-row">
                        <label className="col-sm-3 col-form-label" htmlFor="instagram">Instagram URL</label>
                        <div className="col-sm-9">
                          <input
                            className="form-control"
                            id="instagram"
                            type="url"
                            placeholder="Instagram"
                            onChange={formik.handleChange}
                            value={formik.values.instagram}
                          />
                          {formik.errors.instagram && (
                            <>
                              <span>{formik.errors.instagram}</span>
                            </>
                          )}
                        </div>
                      </div>
                      <div className="form-group row form-row">
                        <label className="col-sm-3 col-form-label" htmlFor="images">Images</label>
                        <div className="col-sm-9">
                          <ImageUploader
                            withIcon={false}
                            withPreview={true}
                            label=""
                            buttonText="Upload Images"
                            onChange={(e) => {
                              formik.setFieldValue('images', e);
                            }}
                            imgExtension={[".jpg", ".gif", ".png", ".gif", ".svg"]}
                            fileSizeError="file size is too big"
                          />
                          <input type="hidden"/>
                          {formik.errors.images && (
                            <>
                              <span>{'Select images'}</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="card-footer">
                      <button type="submit" className="btn btn-primary mr-1">{isLoading ? 'Loading...' : 'Submit and add new one'}</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PubAdd;
