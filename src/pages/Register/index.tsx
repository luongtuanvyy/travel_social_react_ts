import FormRegister from "./components/FormRegister.tsx";

const RegisterFeature = () => {
  return (
    <div className="grid grid-cols-2 h-screen gap-4">
      <FormRegister />
      <div className="flex justify-center items-center p-4 ">
        <img
          className="h-full object-cover rounded-xl"
          src="https://wallpapercosmos.com/w/full/a/d/7/22393-3840x2160-desktop-4k-leaf-wallpaper-image.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default RegisterFeature;
