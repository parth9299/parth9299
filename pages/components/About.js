import React from "react";

export default function About() {
  return (
    <>
      <div class="my-5">
        <h1 class="text-center"> Our Services </h1>
      </div>
      <div class="container-fluid mb-5">
        <div class="row">
          <div class="col-10 mx-auto">
            <div class="row gy-4">
              <div class="col-md-4 col-12 mx-auto">
                <div class="card">
                  <img
                    src="/reactlivewebsite/static/media/software.43049cae.jpeg"
                    class="card-img-top"
                    alt="/reactlivewebsite/static/media/software.43049cae.jpeg"
                  />
                  <div class="card-body">
                    <h5 class="card-title font-weight-bold">
                      Software development
                    </h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a
                      aria-current="page"
                      class="btn btn-primary active"
                      href="/"
                    >
                      Check Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
