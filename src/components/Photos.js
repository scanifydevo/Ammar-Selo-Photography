import React, { Component } from 'react';

class Photos extends Component {
  constructor() {
    super();
    this.state = {
      photos: []
    }
  }
  componentDidMount() {
    let dataURL = 'http://ammar-selo-photography.dev/wp-json/wp/v2/photos?_embed'
    fetch(dataURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          photos: res
        })
      })
  }
  render() {

    let photos = this.state.photos.map((photo, index) => {
      return (
        <div key={index}>
          <img src={photo._embedded['wp:featuredmedia'][0]
                         .media_details
                         .sizes
                         .medium
                         .source_url}
          />
          <p><strong>Title:</strong>{photo.title.rendered}</p>
          <p><strong>Release Year:</strong>{photo.acf.release_year}</p>
          <div>
            <strong>Description:</strong>
            <div dangerouslySetInnerHTML={{__html: photo
                                                    .acf
                                                    .description}}
            />
          </div>
        </div>

      )
    })

    return (
      <div>
        <h2>Ammar's Photos</h2>
        {photos}
      </div>

    )

  }
}

export default Photos
