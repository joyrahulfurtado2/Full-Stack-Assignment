import React, { Component } from "react";
import axios from "../../axios-base";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./HomeComponent.css";
import { TextField } from "@material-ui/core";
import ShowMoreText from "react-show-more-text";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { OffLinePosts } from "../../assets/OfflinePost";
import moment from "moment";

class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articleBody: "",
      articleTitle: "",
      onLinePosts: [],
      displayOnlinePost: false,
      displayOfflinePost: true,
    };
    this.handleRichEditoChange = this.handleRichEditoChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLoadAllPosts = this.handleLoadAllPosts.bind(this);
    this.handleStatus = this.handleStatus.bind(this);
  }

  handleRichEditoChange(value) {
    this.setState({ articleBody: value });
  }
  clearInputs() {
    document.getElementById("articleTitle").value = "";
    this.setState({
      articleBody: "",
    });
  }
  onSuccess = () => {
    this.clearInputs();
    toast.dark("Post Uploading");
    this.handleStatus();
  };
  handleSubmit() {
    const objArticle = {
      articleTitle: document.getElementById("articleTitle").value,
      articleBody: this.state.articleBody,
      createdDate: Date.now(),
    };
    axios
      .post("/addPost", objArticle)
      .then((response) => {
        this.onSuccess();
        this.setState({
          onLinePosts: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  handleLoadAllPosts() {
    axios
      .get("/getPosts")
      .then((response) => {
        this.setState({
          onLinePosts: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidUpdate() {}

  componentDidMount() {
    this.handleLoadAllPosts();
  }
  handleStatus() {
    this.setState({
      displayOnlinePost: !this.state.displayOnlinePost,
      displayOfflinePost: !this.state.displayOfflinePost,
    });
  }

  render() {
    const { onLinePosts, displayOfflinePost, displayOnlinePost } = this.state;
    return (
      <div>
        <React.Fragment>
          <div className="home-container">
            <div className="sidewrapper-left"></div>
            <div className="sidewrapper-middle">
              <div className="sidewrapper-middle-sub">
                <div>
                  <TextField id="articleTitle" label="Title" maxLength={75} />
                  <br />
                  <ReactQuill
                    id="articleBody"
                    className="react-quill-cs"
                    value={this.state.articleBody}
                    onChange={this.handleRichEditoChange}
                  />
                </div>
                <div className="btn-section-cs">
                  <div className="btn-section-cs-sub">
                    <input
                      className="btn pst-btn btn-sub-cs bg-color-black"
                      type="submit"
                      value="View Offline Posts"
                      onClick={this.handleStatus}
                      disabled={displayOfflinePost}
                    />
                    <input
                      className="btn pst-btn btn-sub-cs bg-color-black"
                      type="submit"
                      value="View Online Posts"
                      onClick={this.handleStatus}
                      disabled={displayOnlinePost}
                    />
                  </div>

                  <input
                    className="btn pst-btn bg-color-black"
                    type="submit"
                    value="Publish"
                    onClick={this.handleSubmit}
                  />
                </div>
              </div>
              <div>
                {displayOfflinePost && (
                  <div>
                    <div>
                      {OffLinePosts.map((item) => {
                        return (
                          <div className="home-container-sub ">
                            <div className="card card-custom" style={{}}>
                              <div className="card-body">
                                <h5 className="card-title">
                                  {item.articleTitle}
                                </h5>

                                <ShowMoreText
                                  lines={3}
                                  more="Show more"
                                  less="Show less"
                                  className="content-css show-content-cs"
                                  anchorClass="my-anchor-css-class"
                                  expanded={false}
                                  // width={400}
                                  truncatedEndingComponent={"... "}
                                >
                                  <p className="card-text">
                                    <div
                                      dangerouslySetInnerHTML={{
                                        __html: item.articleBody,
                                      }}
                                    ></div>
                                  </p>
                                </ShowMoreText>
                              </div>
                              <div class="card-footer text-muted">
                                Date Posted:
                                {moment(item.createdDate).format(
                                  " MMM DD, YYYY"
                                )}
                              </div>
                            </div>
                            <br />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
              <div>
                {displayOnlinePost &&
                  onLinePosts.map((item) => {
                    return (
                      <div className="home-container-sub ">
                        <div className="card card-custom" style={{}}>
                          <div className="card-body">
                            <h5 className="card-title">{item.articleTitle}</h5>

                            <ShowMoreText
                              lines={3}
                              more="Show more"
                              less="Show less"
                              className="content-css show-content-cs"
                              anchorClass="my-anchor-css-class"
                              expanded={false}
                              // width={400}
                              truncatedEndingComponent={"... "}
                            >
                              <p className="card-text">
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: item.articleBody,
                                  }}
                                ></div>
                              </p>
                            </ShowMoreText>
                          </div>
                          <div class="card-footer text-muted">
                            Date Posted:
                            {moment(item.createdDate).format(" MMM DD, YYYY ")}
                          </div>
                        </div>
                        <br />
                      </div>
                    );
                  })}
              </div>
            </div>

            <div className="sidewrapper-right"></div>
          </div>
          <ToastContainer
            position="bottom-right"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </React.Fragment>
      </div>
    );
  }
}

export default HomeComponent;
