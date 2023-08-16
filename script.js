
const distance = document.getElementById("distance").value;
const weight = document.getElementById("weight").value;
const vehicle_type = document.getElementById("vehicle_type").value;
 
const consultApi = () => {
        const data = {
            emission_factor:
                    "passenger_vehicle-vehicle_type_car-fuel_source_diesel-distance_na-engine_size_medium",
            parameters: {
                    distance: 2800,
                    distance_unit: "km",
                    passengers: 1,
            },
        };
        fetch("https://beta2.api.climatiq.io/emission-factors", {
            method: "POST",
            headers: {
                    Authorization:
                        "Bearer B55SKHG7MP4VXWP90J53BENJMZW9",
                        "Content-Type": "application/json",
                },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById("freight-result").innerHTML = data;
        })
    };
                   
    consultApi();
