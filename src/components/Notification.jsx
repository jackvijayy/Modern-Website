import { notification1 } from "../assets";
import { notificationImages } from "../constants";

const Notification = ({ className, title }) => {
  return (
    <div
      className={`${
        className || ""
      } flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur-xl border border-n-1/10 rounded-2xl gap-5`}
    >
      <img
        src={notification1}
        alt="noty"
        width={50}
        height={20}
        className="rounded=2xl"
      />
      <div className="flex-1 ">
        <h6 className="mb-1 font-semibold text-base">{title}</h6>
        <div className="flex justify-between items-center">
          <ul className="flex -m-0.5">
            {notificationImages.map((item, index) => (
              <li key={index}>
                <img
                  src={item}
                  alt="notifictaion"
                  width={32}
                  height={12}
                  className="rounded-2xl"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notification;
