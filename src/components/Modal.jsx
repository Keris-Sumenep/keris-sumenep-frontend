export default function Modal({ isView, data, target }) {
  return (
    <>
      <div
        className={`modal fade ${target} show`}
        tabindex="-1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        style={{ display: isView ? "block" : "hidden", paddingRight: "17px" }}
        aria-modal="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="myLargeModalLabel">
                <p className="">
                  {target == "video" ? "Video Benda" : "Voice Benda"}
                </p>
              </h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-hidden="true"
              >
                ×
              </button>
            </div>
            <div className="modal-body">
              {target == "video" ? (
                <video className="col-12" controls>
                  <source
                    src={`${import.meta.env.VITE_APP_BASEURL}/video-benda/${
                      data && data.video_bendas && data.video_bendas[0]
                        ? data.video_bendas[0].voice
                        : ""
                    }`}
                    type="video/mp4"
                  />
                </video>
              ) : (
                <div
                  className="col-12"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <audio controls={true} className="col-8 mx-auto">
                    <source
                      src={`${import.meta.env.VITE_APP_BASEURL}/voice-benda/${
                        data && data.voice_bendas && data.voice_bendas[0]
                          ? data.voice_bendas[0].voice
                          : ""
                      }`}
                      type="audio/mpeg"
                    />
                    Your browser does not support the audio element.
                  </audio>
                </div>
              )}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger btn-rounded text-left"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
