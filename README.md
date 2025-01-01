# 🗑️ Litter Reporting System

A cloud-based platform designed to help communities report, track, and remove litter efficiently. This project leverages AWS services and modern web technologies to make litter reporting simple and engaging.

---

## 🌟 Features

- **Photo Uploads:** Upload photos of litter securely to AWS S3.
- **Litter Map:** View litter reports dynamically on an interactive map.
- **User Authentication:** Log in using AWS Cognito or other OAuth providers.
- **Leaderboards (Optional):** Gamify litter cleanup efforts with scoring.
- **Real-Time Notifications:** Receive alerts for new reports via AWS SNS.

---

## 🚀 Tech Stack

### **Frontend**
- **Framework:** React (built with Vite for optimized development)
- **Styling:** Material-UI
- **TypeScript:** Strong typing for maintainability
- **Map API:** Google Maps or Mapbox

### **Backend**
- **Serverless Framework:** AWS Lambda
- **API Gateway:** RESTful endpoints for secure communication
- **Database:** DynamoDB for scalable and efficient data storage
- **Image Storage:** AWS S3 with presigned URLs for secure uploads
- **Notifications:** AWS SNS for real-time alerts

---

## 📁 Project Structure

```plaintext
.
├── frontend/
│   ├── src/
│   │   ├── components/        # Reusable UI components
│   │   ├── pages/             # Individual pages (MapView, ReportForm)
│   │   ├── services/          # API and Auth services
│   │   ├── hooks/             # Custom React hooks (e.g., useAuth)
│   │   ├── styles/            # Styling and Material-UI themes
├── backend/
│   ├── lambdas/               # AWS Lambda function code
│   ├── api-gateway/           # API Gateway setup files
│   ├── database/              # DynamoDB setup and schemas
├── .env                       # Environment variables (ignored in Git)
├── README.md                  # Project documentation


