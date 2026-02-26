import React, { useState } from "react";
import CardLoader from "@/components/shared/CardLoader";
import useCardTitleActions from "@/hooks/useCardTitleActions";
import { FiPlus, FiMapPin, FiX } from "react-icons/fi";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";


const tabs = ["Global", "Country", "Specific"];

const LocationManagement = () => {
    const { refreshKey, isRemoved, isExpanded } = useCardTitleActions();

    const [activeTab, setActiveTab] = useState("Global");
   const [locations, setLocations] = useState([
  {
    country: "USA",
    city: "New York",
    pincode: "10001",
  },
  {
    country: "India",
    city: "Mumbai",
    pincode: "400001",
  },
  {
    country: "Brazil",
    city: "São Paulo",
    pincode: "01000-000",
  },
]);

    const [newLocation, setNewLocation] = useState("");
    const [showAddForm, setShowAddForm] = useState(false);

    if (isRemoved) return null;

    const handleAddLocation = () => {
        if (newLocation.trim()) {
            setLocations([...locations, newLocation]);
            setNewLocation("");
            setShowAddForm(false);
        }
    };

    const handleRemove = (loc) => {
        setLocations(locations.filter(item => item !== loc));
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setShowAddForm(false);
        setNewLocation("");
    };

    const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "YOUR_REAL_API_KEY", 
});

const center = {
    lat: 20.5937,
    lng: 78.9629,
};


    return (
        <div className="col-xxl-12">
            <div className={`card stretch stretch-full ${isExpanded ? "card-expand" : ""} ${refreshKey ? "card-loading" : ""}`}>
                <div className="card-body">

                    {/* Tabs */}
                    <div className="d-flex mb-4 rounded-pill p-1" style={{ width: "fit-content" }}>
                        {tabs.map(tab => (
                            <button
                                key={tab}
                                onClick={() => handleTabChange(tab)}
                                className={`btn rounded-pill px-4 ${
                                    activeTab === tab ? "btn-primary" : "btn-light"
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Map Section (Only for Global) */}
                    {activeTab === "Global" && (
                        <>
                            <div className="rounded overflow-hidden mb-4">
            {isLoaded ? (
               <div className="rounded overflow-hidden mb-4">
  <iframe
    title="map"
    width="100%"
    height="300"
    frameBorder="0"
    scrolling="no"
    marginHeight="0"
    marginWidth="0"
    src="https://www.openstreetmap.org/export/embed.html?bbox=68.1766%2C7.9655%2C97.4026%2C35.4940&layer=mapnik"
    style={{ border: 0 }}
  ></iframe>
</div>
            ) : (
                <div style={{ height: "300px" }}>Loading Map...</div>
            )}
        </div>

                            {/* Selected Locations */}
                            <div className="d-flex flex-wrap gap-3 mb-4">
                                {locations.map((loc, index) => (
                                    <div
                                        key={index}
                                        className="d-flex align-items-center bg-light px-3 py-2 rounded-pill"
                                    >
                                        <FiMapPin className="me-2 text-muted" size={14} />
                                        <span>{loc.country}</span>
                                        <FiX
                                            size={14}
                                            className="ms-2"
                                            style={{ cursor: "pointer" }}
                                            onClick={() => handleRemove(loc)}
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Add New Button */}
                            {!showAddForm && (
                                <div className="text-end">
                                    <button
                                        className="btn btn-link fw-bold text-primary fw-16"
                                        onClick={() => setShowAddForm(true)}
                                    >
                                        + Add New 
                                    </button>
                                </div>
                            )}

                            {/* Add Form */}
                            {showAddForm && (
                                <div className="row align-items-end mt-3">
                                    <div className="col-md-6">
                                        <label className="form-label">Country</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="e.g. USA"
                                            value={newLocation}
                                            onChange={(e) => setNewLocation(e.target.value)}
                                        />
                                    </div>

                                    <div className="col-md-6 d-flex justify-content-end gap-3 mt-3 mt-md-0">
                                        <button
                                            className="btn btn-light"
                                            onClick={() => {
                                                setShowAddForm(false);
                                                setNewLocation("");
                                            }}
                                        >
                                            Discard
                                        </button>

                                        <button
                                            className="btn btn-dark"
                                            onClick={handleAddLocation}
                                        >
                                            Add Location
                                        </button>
                                    </div>
                                </div>
                            )}
                        </>
                    )}

                    {/* Country Tab Content */}
                    {activeTab === "Country" && (
                        <>
                            <div className="rounded overflow-hidden mb-4">
            {isLoaded ? (
               <div className="rounded overflow-hidden mb-4">
  <iframe
    title="map"
    width="100%"
    height="300"
    frameBorder="0"
    scrolling="no"
    marginHeight="0"
    marginWidth="0"
    src="https://www.openstreetmap.org/export/embed.html?bbox=68.1766%2C7.9655%2C97.4026%2C35.4940&layer=mapnik"
    style={{ border: 0 }}
  ></iframe>
</div>
            ) : (
                <div style={{ height: "300px" }}>Loading Map...</div>
            )}
        </div>

                            {/* Selected Locations */}
                            <div className="d-flex flex-wrap gap-3 mb-4">
                                {locations.map((loc, index) => (
                                    <div
                                        key={index}
                                        className="d-flex align-items-center bg-light px-3 py-2 rounded-pill"
                                    >
                                        <FiMapPin className="me-2 text-muted" size={14} />
                                        <span>{loc.country}</span>
                                        <FiX
                                            size={14}
                                            className="ms-2"
                                            style={{ cursor: "pointer" }}
                                            onClick={() => handleRemove(loc)}
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Add New Button */}
                            {!showAddForm && (
                                <div className="text-end">
                                    <button
                                        className="btn btn-link fw-bold text-primary fw-16"
                                        onClick={() => setShowAddForm(true)}
                                    >
                                        + Add New 
                                    </button>
                                </div>
                            )}

                            {/* Add Form */}
                            {showAddForm && (
                                <div className="row align-items-end mt-3">
                                    <div className="col-md-6">
                                        <label className="form-label">Country</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="e.g. USA"
                                            value={newLocation}
                                            onChange={(e) => setNewLocation(e.target.value)}
                                        />
                                    </div>

                                    <div className="col-md-6 d-flex justify-content-end gap-3 mt-3 mt-md-0">
                                        <button
                                            className="btn btn-light"
                                            onClick={() => {
                                                setShowAddForm(false);
                                                setNewLocation("");
                                            }}
                                        >
                                            Discard
                                        </button>

                                        <button
                                            className="btn btn-dark"
                                            onClick={handleAddLocation}
                                        >
                                            Add Location
                                        </button>
                                    </div>
                                </div>
                            )}
                        </>
                    )}

                    {/* Specific Tab Content */}
                    {activeTab === "Specific" && (
                        <>
                            <div className="rounded overflow-hidden mb-4">
            {isLoaded ? (
              <div className="rounded overflow-hidden mb-4">
  <iframe
    title="map"
    width="100%"
    height="300"
    frameBorder="0"
    scrolling="no"
    marginHeight="0"
    marginWidth="0"
    src="https://www.openstreetmap.org/export/embed.html?bbox=68.1766%2C7.9655%2C97.4026%2C35.4940&layer=mapnik"
    style={{ border: 0 }}
  ></iframe>
</div>
            ) : (
                <div style={{ height: "300px" }}>Loading Map...</div>
            )}
        </div>

                            {/* Selected Locations */}
                            <div className="d-flex flex-wrap gap-3 mb-4">
                                {locations.map((loc, index) => (
                                    <div
                                        key={index}
                                        className="d-flex align-items-center bg-light px-3 py-2 rounded-pill"
                                    >
                                        <FiMapPin className="me-2 text-muted" size={14} />
                                        <span>{loc.city}</span>, 
                                        <span className="ms-1">{loc.country} {loc.pincode}</span>
                                        <FiX
                                            size={14}
                                            className="ms-2"
                                            style={{ cursor: "pointer" }}
                                            onClick={() => handleRemove(loc)}
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Add New Button */}
                            {!showAddForm && (
                                <div className="text-end">
                                    <button
                                        className="btn btn-link fw-bold text-primary fw-16"
                                        onClick={() => setShowAddForm(true)}
                                    >
                                        + Add New 
                                    </button>
                                </div>
                            )}

                            {/* Add Form */}
                            {showAddForm && (
                                <div className="row align-items-end mt-3">
                                    <div className="col-md-6">
                                        <label className="form-label">Country</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="e.g. USA"
                                            value={newLocation}
                                            onChange={(e) => setNewLocation(e.target.value)}
                                        />
                                    </div>

                                    <div className="col-md-6 d-flex justify-content-end gap-3 mt-3 mt-md-0">
                                        <button
                                            className="btn btn-light"
                                            onClick={() => {
                                                setShowAddForm(false);
                                                setNewLocation("");
                                            }}
                                        >
                                            Discard
                                        </button>

                                        <button
                                            className="btn btn-dark"
                                            onClick={handleAddLocation}
                                        >
                                            Add Location
                                        </button>
                                    </div>
                                </div>
                            )}
                        </>
                    )}

                    

                </div>

                <CardLoader refreshKey={refreshKey} />
            </div>
        </div>
    );
};

export default LocationManagement;
