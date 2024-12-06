import React from "react";
// import {
//   Search,
//   Map,
//   ChevronLeft,
//   ChevronRight,
//   Clock,
//   Bell,
//   Mail,
//   Phone,
//   CreditCard,
// } from "lucide-react";
import {
  FaBell,
  FaSearch,
  FaArrowLeft,
  FaArrowRight,
  FaMap,
  FaClock,
  FaMailBulk,
  FaPhone,
  FaCreditCard,
} from "react-icons/fa";
import img from "../../assets/carweb2.png";

const RentBuddy = () => {
  return (
    <div className="dashboard">
      <header>
        <h1>Admin</h1>
        <div className="search-container">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search here..." />
        </div>
      </header>

      <nav className="nav-buttons">
        <button className="btn primary">
          <FaClock />
          Top Rental
        </button>
        <button className="btn">
          <FaMap />
          Earning Chart
        </button>
        <button className="btn">
          <FaMap />
          Show Map
        </button>
      </nav>

      <div className="vehicle-grid">
        <div className="vehicle-card blue">
          <img src="./api" alt="BMW X5" />
          <div className="vehicle-info">
            <div className="vehicle-header">
              <h3>X5 xDrive 30d Sport</h3>
              <span>$65/km</span>
            </div>
            <div className="vehicle-details">
              <span>Mileage: 23,562 kms</span>
              <span>Next Booking</span>
            </div>
            <div className="booking-time">26 Mar, 8AM</div>
          </div>
        </div>

        <div className="vehicle-card red">
          <img src="/api/placeholder/200/120" alt="Audi Q5" />
          <div className="vehicle-info">
            <div className="vehicle-header">
              <h3>Q5 Premium plus</h3>
              <span>$80/km</span>
            </div>
            <div className="vehicle-details">
              <span>Mileage: 12,650 kms</span>
              <span>Next Booking</span>
            </div>
            <div className="booking-time">26 Mar, 8AM</div>
          </div>
        </div>

        <div className="vehicle-card gray">
          <img src="/api/placeholder/200/120" alt="Mercedes GLE" />
          <div className="vehicle-info">
            <div className="vehicle-header">
              <h3>GLE 400d Automatic</h3>
              <span>$90/km</span>
            </div>
            <div className="vehicle-details">
              <span>Mileage: 6,520 kms</span>
              <span>Next Booking</span>
            </div>
            <div className="booking-time">26 Mar, 8AM</div>
          </div>
        </div>
      </div>

      <div className="bookings-header">
        <h2>Upcoming Bookings:</h2>
        <div className="nav-arrows">
          <button className="arrow-btn">
            <FaArrowLeft />
          </button>
          <button className="arrow-btn">
            <FaArrowRight />
          </button>
        </div>
      </div>

      <div className="main-content">
        <div className="bookings-list">
          {[
            {
              name: "Marvin Watts",
              price: "$8.00",
              status: "Pre-paid",
              booking: "352 Booking",
              car: "BMW xDrive 350d",
            },
            {
              name: "Bettie Palmer",
              price: "$7.50",
              status: "Pending",
              booking: "352 Booking",
              car: "Audi Q5 Luxury Line",
            },
            {
              name: "Mick John",
              price: "$9.20",
              status: "Pre-paid",
              booking: "352 Booking",
              car: "Lexus RX 350h Panoramic",
            },
            {
              name: "Elizabeth Tai",
              price: "$8.60",
              status: "Pre-paid",
              booking: "352 Booking",
              car: "Mercedes GLE 450d",
            },
            {
              name: "Cecelia Hills",
              price: "$6.00",
              status: "Pending",
              booking: "352 Booking",
              car: "Toyota Camry 2.5 Hybrid",
            },
            {
              name: "Wesley Valdez",
              price: "$4.50",
              status: "Pre-paid",
              booking: "352 Booking",
              car: "Mitsubishi Pajero Sports",
            },
          ].map((booking, index) => (
            <div key={index} className="booking-item">
              <div className="user-info">
                <img src="/api/placeholder/32/32" alt="" className="avatar" />
                <span>{booking.name}</span>
              </div>
              <span>{booking.price}/km</span>
              <span
                className={`status ${
                  booking.status === "Pending" ? "pending" : "prepaid"
                }`}
              >
                {booking.status}
              </span>
              <span className="booking-number">{booking.booking}</span>
              <span className="car-model">{booking.car}</span>
            </div>
          ))}
        </div>

        <div className="user-profile">
          <div className="profile-header">
            <img
              src="/api/placeholder/64/64"
              alt=""
              className="profile-avatar"
            />
            <h3>Bettie Palmer</h3>
            <p>13th Street, 47 W 13th St, New York, NY 10011, USA</p>
          </div>

          <div className="stats-grid">
            <div className="stat">
              <div className="stat-value">25.6kms</div>
              <div className="stat-label">Distance</div>
            </div>
            <div className="stat">
              <div className="stat-value">Pre-Booked</div>
              <div className="stat-label">Booking</div>
            </div>
            <div className="stat">
              <div className="stat-value">BMW x5di</div>
              <div className="stat-label">Car</div>
            </div>
          </div>

          <div className="user-details">
            <h4>Bettie Information</h4>
            <div className="detail-item">
              <FaMailBulk />
              bettiepalmer@gmail.com
            </div>
            <div className="detail-item">
              <FaPhone />
              +1 555 555554
            </div>
            <div className="detail-item">
              <FaCreditCard />
              License no. - 4325766544
            </div>
          </div>

          <div className="profile-footer">
            <div className="pending-amount">
              <span>Pending</span>
              <div>$ 257.50</div>
            </div>
            <button className="notify-btn">
              <FaBell />
              Notify Now
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .dashboard {
          padding: 24px;
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
          max-width: 1200px;
          margin: 4rem auto 0;
        }

        header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }

        h1 {
          font-size: 20px;
          font-weight: bold;
        }

        .search-container {
          position: relative;
        }

        .search-container input {
          padding: 8px 16px 8px 36px;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
        }

        .search-icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: #a0aec0;
          width: 16px;
          height: 16px;
        }

        .nav-buttons {
          display: flex;
          gap: 16px;
          margin-bottom: 24px;
        }

        .btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          color: #4a5568;
        }

        .btn.primary {
          background: #6b46c1;
          color: white;
        }

        .vehicle-grid {
          display: flex;
          gap: 16px;
          margin-bottom: 32px;
        }

        .vehicle-card {
          flex: 1;
          padding: 16px;
          border-radius: 8px;
        }

        .vehicle-card.blue {
          background: #ebf8ff;
        }
        .vehicle-card.red {
          background: #fff5f5;
        }
        .vehicle-card.gray {
          background: #f7fafc;
        }

        .vehicle-card img {
          width: 100%;
          height: 120px;
          object-fit: cover;
          margin-bottom: 16px;
          border-radius: 4px;
        }

        .vehicle-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }

        .vehicle-details {
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          color: #718096;
        }

        .booking-time {
          margin-top: 8px;
          font-size: 14px;
          color: #718096;
        }

        .bookings-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }

        .nav-arrows {
          display: flex;
          gap: 8px;
        }

        .arrow-btn {
          padding: 4px;
          border-radius: 50%;
          background: #f7fafc;
          border: none;
          cursor: pointer;
        }

        .main-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 16px;
        }

        .bookings-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .booking-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px;
          border-radius: 8px;
        }

        .booking-item:hover {
          background: #f7fafc;
        }

        .user-info {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
        }

        .status {
          padding: 4px 12px;
          border-radius: 9999px;
          font-size: 14px;
        }

        .status.pending {
          background: #fffaf0;
          color: #dd6b20;
        }

        .status.prepaid {
          background: #f0fff4;
          color: #38a169;
        }

        .user-profile {
          background: #6b46c1;
          color: white;
          padding: 24px;
          border-radius: 8px;
        }

        .profile-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 24px;
        }

        .profile-avatar {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          margin-bottom: 8px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-bottom: 24px;
        }

        .stat {
          text-align: center;
        }

        .stat-value {
          font-weight: 600;
        }

        .stat-label {
          font-size: 14px;
          color: #e9d8fd;
        }

        .user-details {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .detail-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
        }

        .profile-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 24px;
        }

        .notify-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: white;
          color: #6b46c1;
          border: none;
          border-radius: 8px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default RentBuddy;
