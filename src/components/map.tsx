import { SetStateAction, useRef, useState } from "react";
import Link from "next/link";
import { Image } from "cloudinary-react";
import ReactMapGL, { Marker, Popup, ViewState } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
// import { useLocalState } from "src/utils/useLocalState";
// import { HousesQuery_houses } from "src/generated/HousesQuery";
// import { SearchBox } from "./searchBox";

interface IProps {

}

export default function Map({}: IProps) {

    const mapRef = useRef<ReactMapGL | null>(null);
    const [viewport, setViewport] = useState<ViewState>({
        latitude: 51.507351,
        longitude: -0.127758,
        zoom: 10,
    });

    return (
    <div className="text-black relative">
        <ReactMapGL 
        {...viewport} 
        width="100%" 
        height="calc(100vh - 64px)"
        mapboxApiAccessToken= {process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
        onViewportChange={(nextViewport: any) => setViewport(nextViewport)}
        ref={(instance) => (mapRef.current = instance)}
        minZoom={5}
        maxZoom={15}
        mapStyle="mapbox://styles/quintessa/ckvpi9jzo38qp14p36h0m4nm3"
        ></ReactMapGL>
    </div>
    );
}
