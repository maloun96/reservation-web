import React, { Fragment, useState } from 'react';
import Breadcrumb from '../common/breadcrumb';
import { Codepen, FileText, Youtube, BookOpen, Aperture, Archive } from 'react-feather';
import knowledgebaseDB from '../../data/knowledgebase/knowledgebaseDB';
import two from '../../assets/images/faq/2.jpg';
import one from '../../assets/images/faq/1.jpg';
import three from '../../assets/images/faq/3.jpg';
import four from '../../assets/images/faq/4.jpg';
import errorImg from '../../assets/images/search-not-found.png';

const KnowledgebaseComponent = () => {
    const [searchTerm, setSearchTerm] = React.useState("");
    const [search, setsearch] = useState(knowledgebaseDB);

    const handleChange = event => {
        const searchByTitle = [];
        setSearchTerm(event.target.value);
        knowledgebaseDB.filter(data => {
            if (data.title.toLowerCase().indexOf(event.target.value) > -1) {
                searchByTitle.push(data);
            }
            return 0;
        })
        setsearch(searchByTitle)
    };

    return (
        <Fragment>
            <Breadcrumb title="Knowledgebase" parent="Knowledgebase" />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-4 xl-50 col-sm-6">
                        <div className="card bg-primary">
                            <div className="card-body">
                                <div className="media faq-widgets">
                                    <div className="media-body">
                                        <h5>Articles</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                                    </div><FileText />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 xl-50 col-sm-6">
                        <div className="card bg-primary">
                            <div className="card-body">
                                <div className="media faq-widgets">
                                    <div className="media-body">
                                        <h5>Knowledgebase</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                                    </div><BookOpen />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 xl-100">
                        <div className="card bg-primary">
                            <div className="card-body">
                                <div className="media faq-widgets">
                                    <div className="media-body">
                                        <h5>Support</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p> </div><Aperture />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="header-faq">
                                    <h5 className="mb-0">Browse articles by category</h5>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <form className="form-inline search-form pull-right search-knowledge">
                                    <div className="form-group mr-0">
                                        <input className="form-control-plaintext" name="search" type="text"
                                            value={searchTerm}
                                            onChange={handleChange} placeholder="Search.." />
                                    </div>
                                </form>
                            </div>
                            <div className="col-sm-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h5>Browse Articles</h5>
                                    </div>

                                    <div className="card-body">
                                        <div className="row browse">
                                            {search.length > 0 ? search.map((data, i) => {
                                                return (
                                                    <div className="col-xl-4 xl-50" key={i}>
                                                        <div className="browse-articles">
                                                            <h6><span><Archive />
                                                            </span>{data.title}</h6>
                                                            <ul dangerouslySetInnerHTML={{ __html: data.desc }}>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                )
                                            }) :
                                                <img className="img-fluid" src={errorImg} alt="" />
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="header-faq">
                            <h5 className="mb-0">Featured Tutorials</h5>
                        </div>
                        <div className="row">
                            <div className="col-xl-3 xl-50 col-md-6">
                                <div className="card features-faq product-box">
                                    <div className="faq-image product-img">
                                        <img className="img-fluid" src={one} alt="" />
                                        <div className="product-hover">
                                            <ul>
                                                <li><i className="icon-link"></i></li>
                                                <li><i className="icon-import"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <h6> Web Design</h6>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                                    </div>
                                    <div className="card-footer"><span>Dec 15, 2019</span><span className="pull-right"><i className="fa fa-star font-primary"></i><i className="fa fa-star font-primary"></i><i className="fa fa-star font-primary"></i><i className="fa fa-star font-primary"></i><i className="fa fa-star font-primary"></i></span></div>
                                </div>
                            </div>
                            <div className="col-xl-3 xl-50 col-md-6">
                                <div className="card features-faq product-box">
                                    <div className="faq-image product-img">
                                        <img className="img-fluid" src={two} alt="" />
                                        <div className="product-hover">
                                            <ul>
                                                <li><i className="icon-link"></i></li>
                                                <li><i className="icon-import"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <h6>Web Development</h6>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                                    </div>
                                    <div className="card-footer"><span>Dec 15, 2019</span><span className="pull-right"><i className="fa fa-star font-primary"></i><i className="fa fa-star font-primary"></i><i className="fa fa-star font-primary"></i><i className="fa fa-star font-primary"></i><i className="fa fa-star-o font-primary"></i></span></div>
                                </div>
                            </div>
                            <div className="col-xl-3 xl-50 col-md-6">
                                <div className="card features-faq product-box">
                                    <div className="faq-image product-img">
                                        <img className="img-fluid" src={three} alt="" />
                                        <div className="product-hover">
                                            <ul>
                                                <li><i className="icon-link"></i></li>
                                                <li><i className="icon-import"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <h6>UI Design</h6>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                                    </div>
                                    <div className="card-footer"><span>Dec 15, 2019</span><span className="pull-right"><i className="fa fa-star font-primary"></i><i className="fa fa-star font-primary"></i><i className="fa fa-star font-primary"></i><i className="fa fa-star font-primary"></i><i className="fa fa-star font-primary"></i></span></div>
                                </div>
                            </div>
                            <div className="col-xl-3 xl-50 col-md-6">
                                <div className="card features-faq product-box">
                                    <div className="faq-image product-img">
                                        <img className="img-fluid" src={four} alt="" />
                                        <div className="product-hover">
                                            <ul>
                                                <li><i className="icon-link"></i></li>
                                                <li><i className="icon-import"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <h6> UX Design</h6>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                                    </div>
                                    <div className="card-footer"><span>Dec 15, 2019</span><span className="pull-right"><i className="fa fa-star font-primary"></i><i className="fa fa-star font-primary"></i><i className="fa fa-star font-primary"></i><i className="fa fa-star font-primary"></i><i className="fa fa-star-half-o font-primary"></i></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="header-faq">
                            <h5 className="mb-0">Latest articles and videos</h5>
                        </div>
                        <div className="row">
                            <div className="col-xl-4 col-md-6">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="media"><Codepen className="m-r-30" />
                                                    <div className="media-body">
                                                        <h6 className="f-w-600">Using Video</h6>
                                                        <p>Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="media"><Codepen className="m-r-30" />
                                                    <div className="media-body">
                                                        <h6 className="f-w-600">Vel illum qu</h6>
                                                        <p>Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="media"><Codepen className="m-r-30" />
                                                    <div className="media-body">
                                                        <h6 className="f-w-600"> Cum sociis natoqu</h6>
                                                        <p>Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="media"><FileText className="m-r-30" />
                                                    <div className="media-body">
                                                        <h6 className="f-w-600"> Donec pede justo</h6>
                                                        <p> Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="media"><FileText className="m-r-30" />
                                                    <div className="media-body">
                                                        <h6 className="f-w-600"> Nam quam nunc</h6>
                                                        <p> Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="media">
                                                    <FileText className="m-r-30" />
                                                    <div className="media-body">
                                                        <h6 className="f-w-600">Using Video </h6>
                                                        <p>Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="row">
                                    <div className="col-xl-12 col-md-6">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="media"><Youtube className="m-r-30" />
                                                    <div className="media-body">
                                                        <h6 className="f-w-600"> Vel illum qu</h6>
                                                        <p>Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-12 col-md-6">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="media"><Youtube className="m-r-30" />
                                                    <div className="media-body">
                                                        <h6 className="f-w-600"> Cum sociis natoqu</h6>
                                                        <p>Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-12">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="media"><Youtube className="m-r-30" />
                                                    <div className="media-body">
                                                        <h6 className="f-w-600">Donec pede justo</h6>
                                                        <p>Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default KnowledgebaseComponent;