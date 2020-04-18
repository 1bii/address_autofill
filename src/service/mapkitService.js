import 'apple-mapkit-js';

// token generating and function implementation inspired by https://mapkitjs.rubeng.nl/

export const mapInit = (token) => {
    mapkit.init({
        authorizationCallback: function(done) {
            done(token);
        }
    });
    let Cupertino = new mapkit.CoordinateRegion(
        new mapkit.Coordinate(37.3316850890998, -122.030067374026),
        new mapkit.CoordinateSpan(0.167647972, 0.354985255)
    );
    let map = new mapkit.Map("map");
    map.region = Cupertino;
    return map;
};

export const mapSearchInit = (searchProps) => {
    return new mapkit.Search(searchProps);
};