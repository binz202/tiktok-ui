import { useEffect,useState } from "react"; // vd2: 


function App() {
   const [avatar,setAvatar] = useState()

    useEffect(() => {

    return () => {
       avatar && URL.revokeObjectURL(avatar.preview);
    }
    },[avatar])

   const hanldePreviewAvatar = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setAvatar(file);
     // e.target.value = null // cho phép chọn ảnh giống nhau
   }

   return(
    <div>
        <input
            multiple
            type="file"
            onChange={hanldePreviewAvatar}
        />
    {
        avatar && (
            <img src={avatar.preview} alt="" width="80%"/>
        )
    }
    </div>    
 )
}
 
 export default App;



//  import { useEffect, useState } from "react";

// function App() {
//   const [avatars, setAvatars] = useState([]);

//   useEffect(() => {
//     return () => {
//       avatars.forEach((avatar) => {
//         URL.revokeObjectURL(avatar.preview);
//       });
//     };
//   }, [avatars]);

//   const handlePreviewAvatar = (e) => {
//     const files = e.target.files;
//     const newAvatars = Array.from(files).map((file) => ({
//       file,
//       preview: URL.createObjectURL(file),
//     }));   
//     setAvatars((prevAvatars) => [...prevAvatars, ...newAvatars]);
//   };

//   return (
//     <div>
//       <input multiple type="file" onChange={handlePreviewAvatar} />
//       {avatars.map((avatar, index) => (
//         <img key={index} src={avatar.preview} alt="" width="30%" />
//       ))}
//     </div>
//   );
// }

// export default App;