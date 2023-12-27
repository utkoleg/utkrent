// import React, {useEffect, useState} from 'react';
// import FlatService from "../Services/FlatService";
// import {useAuth} from "../js/AuthContext";
// import LocalStorageService, {USER_INFO_KEY} from "../Services/LocalStorageService";
// import {useDispatch, useSelector} from "react-redux";
// import {uploadImage} from "../Actions/uploadActions";
// function AddFlatPage() {
//
//     // const [file, setFile] = useState();
//     // const [name, setName] = useState('')
//     // const [city, setCity] = useState('')
//     // const [bed, setBed] = useState(0)
//     // const [bath, setBath] = useState(0)
//     // const [price, setPrice] = useState(0)
//     // const [image, setImage] = useState(null)
//     //
//     // const {isAuthenticated, logout} = useAuth();
//     // const [user, setUser] = useState(JSON.parse(LocalStorageService.get(USER_INFO_KEY)));
//     // const [username, setUsername] = useState();
//     //
//     // useEffect(() => {
//     //     if (isAuthenticated) {
//     //         const storedUser = JSON.parse(LocalStorageService.get(USER_INFO_KEY));
//     //         setUser(storedUser);
//     //         setUsername(storedUser?.username);
//     //     }
//     // }, [isAuthenticated]);
//     //
//     // const isButtonActive = file !== '' && name !== '' && city !== '' && bed != null && bath !== null && price !== null;
//     //
//     // function handleImageChange(e) {
//     //     console.log(e.target.files);
//     //     setFile(URL.createObjectURL(e.target.files[0]));
//     //     setImage(e.target.files[0]);
//     //     // setImage(e.target.files);
//     // }
//
//
//
//     /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//
//
//     const [name, setName] = useState('')
//     const [city, setCity] = useState('')
//     const [bed, setBed] = useState(0)
//     const [bath, setBath] = useState(0)
//     const [price, setPrice] = useState(0)
//     const dispatch = useDispatch();
//     const [imagePreview, setImagePreview] = useState(null);
//     const [imageData, setImageData] = useState(null);
//     const [imageName, setImageName] = useState("");
//     const {image} = useSelector(state => state.upload);
//
//     const handleUploadClick = event => {
//         let file = event.target.files[0];
//         const flatData = new FormData();
//         imageData.append('flatName', name);
//         imageData.append('flatCity', city);
//         imageData.append('flatBed', bed);
//         imageData.append('bed', bed);
//         imageData.append('imageFile', file);
//         setImageData(imageData);
//         setImagePreview(URL.createObjectURL(file));
//     };
//
//     const uploadImageWithAdditionalData = () => {
//         imageData.append('imageName', imageName);
//         dispatch(uploadImage(imageData));
//     };
//
//
//     const handleNameChange = (e) => {
//         setName(e.target.value);
//     }
//
//     const handleCityChange = (e) => {
//         setCity(e.target.value);
//     }
//
//     const handleBedChange = (e) => {
//         setBed(e.target.value);
//     }
//
//     const handleBathChange = (e) => {
//         setBath(e.target.value);
//     }
//     const handlePriceChange = (e) => {
//         setPrice(e.target.value);
//     }
//
//
//     const handleSubmitFlat = () => {
//         FlatService.addFlat(name, city, bed, bath, price, image)
//     }
//
//     return (
//         <div style={{
//             height: "100vh",
//             color: "red",
//             display: "flex",
//             justifyContent: "center",
//             alignContent: "center",
//             alignItems: "center"
//         }}>
//             <div>
//                 <input type="text" value={name} placeholder="Flat name"
//                        onChange={handleNameChange}/>
//                 <input type="text" value={city} placeholder="Flat city"
//                        onChange={handleCityChange}/>
//                 <input type="number" value={bed} placeholder="Amount of bedrooms"
//                        onChange={handleBedChange}/>
//                 <input type="number" value={bath} placeholder="Amount of bathrooms"
//                        onChange={handleBathChange}/>
//                 <input type="number" value={price} placeholder="Flat's price"
//                        onChange={handlePriceChange}/>
//                 <input type="file" onChange={handleImageChange}/>
//             </div>
//             <button disabled={!isButtonActive}
//                     style={{opacity: isButtonActive ? "1" : "0.5"}}
//                     onClick={(e) => handleSubmitFlat()}
//             >Log in
//             </button>
//             <img src={file} style={{height: "100px"}}/>
//         </div>
//     );
// }
//
// export default AddFlatPage;