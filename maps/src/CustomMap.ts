export interface Mappable {
  location: {
    lat: number,
    lng: number
  };
  markerContent(): string
}
export class CustomMap {
  private googleMap: google.maps.Map;

  constructor() {
    this.googleMap = new google.maps.Map(document.getElementById('map') as HTMLElement, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }

  addMarker(mappable: Mappable): void {
    // Marker is deprecated but will continue to work, using it to match course
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
        }
      });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent()
      });

      infoWindow.open(this.googleMap, marker);
    })
  }
}