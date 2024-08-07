# OTP Simulation Project

This project demonstrates a simple implementation of One-Time Password (OTP) functionality using Node.js, Express, and Nodemailer for the backend, and vanilla JavaScript for the frontend.

## Prerequisites

- Node.js installed on your system.
- A Gmail account for sending OTP emails.

## Project Setup

1. **Clone the repository or download the project files.**

2. **Navigate to the project directory:**
   ```bash
   cd otp-simulation
   ```

3. **Install the required dependencies:**
   ```bash
   npm install
   ```

4. **Set up your email credentials:**
   - Open `server.js` and replace the email and password fields in the `transporter` configuration with your Gmail account credentials.

## Running the Project

1. **Start the Node.js server:**
   ```bash
   node server.js
   ```
   The server will run on `http://localhost:3000`.

2. **Open `index.html` in your web browser:**
   - You can use a live server extension or a local web server like `live-server` to serve the HTML file:
     ```bash
     live-server
     ```
   This will open `index.html` in your default web browser.

## Project Structure

- `server.js`: Contains the Node.js server code that handles sending and verifying OTPs.
- `index.html`: Simple front-end HTML file for user interaction.
- `package.json`: Contains project metadata and dependencies.

## Functionality

### Sending OTP

1. Enter your email address in the "Send OTP" section.
2. Click the "Send OTP" button.
3. The server generates a 6-digit OTP and sends it to the provided email address.

### Verifying OTP

1. Enter your email address and the OTP received in the "Verify OTP" section.
2. Click the "Verify OTP" button.
3. The server verifies the OTP and provides feedback.

## Dependencies

- **Express**: Web framework for Node.js.
- **Body-Parser**: Middleware to parse incoming request bodies.
- **Nodemailer**: Module for sending emails.
- **Cors**: Middleware to enable CORS.

## License

This project is licensed under the MIT License.

## Acknowledgements

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Nodemailer](https://nodemailer.com/)
- [live-server](https://www.npmjs.com/package/live-server)

## Contact

For any inquiries or feedback, please contact [einsteinmokua100@gmail.com](mailto:your-email@example.com).