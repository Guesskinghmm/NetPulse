# NetPulse – High-Accuracy Internet Speed Monitor (Chrome Extension)

NetPulse is a modern, lightweight Chrome extension designed to provide accurate and reliable measurement of your internet performance in real-time. It delivers a clean, animated interface to display **Download Speed, Upload Speed, Ping**, and overall **Connection Quality**, making it ideal for everyday users, students, and professionals.

This project was built from scratch with a strong focus on accuracy, usability, and practical real-world application.

---

## ✨ Key Features

  * 📥 **High-Accuracy Download Speed**
  * 📤 **High-Accuracy Upload Speed**
  * 📡 **Ping / Latency Measurement**
  * 🎯 **Smart Connection Status Indicator**
  * Excellent ⚡ – Very fast internet
  * Good ✅ – Stable connection
  * Average ⚠️ – Possible buffering
  * Poor ❌ – Slow internet
  * 🔄 **Live Animation During Testing**
  * 🧠 Multi-stream sustained testing for improved precision
  * 🎨 Clean, minimal, professional UI/UX

---

## 🛠 How NetPulse Works

NetPulse performs real-time bandwidth analysis using controlled data transfer through cloud-based test servers. It executes parallel download and upload streams to better saturate available bandwidth, ensuring more realistic and stable results.

Speed is calculated using the formula:

```
Speed (Mbps) = (Bits Transferred / Time Taken) ÷ 1024²
```

To maintain accuracy, it is recommended to run NetPulse independently or maintain a short gap of 5–10 seconds when switching between different internet speed testing sites, as simultaneous tests may interfere with bandwidth readings.

---

## 📁 Project Structure

```
NetPulse-Extension
│
├── manifest.json      # Chrome Extension configuration (Manifest V3)
├── popup.html        # Extension UI layout
├── popup.js          # Core speed testing logic
├── style.css         # Styling and animations
├── icon.png          # Extension & branding icon
├── index.html        # Landing page for NetPulse website
└── NetPulse-Extension.zip  # Installable package for users
```

---

## 💻 Installation Guide (For Users)

1. Download the extension ZIP from the website.
2. Extract the ZIP file.
3. Open Google Chrome and go to:

   ```
   chrome://extensions
   ```
4. Enable **Developer Mode** (top-right corner).
5. Click **Load Unpacked**.
6. Select the extracted `NetPulse-Extension` folder.

✅ The extension will now appear in the Chrome toolbar.

---

## 🌐 Live Project

🔗 Website: [https://netppulse.netlify.app/](https://netppulse.netlify.app/)

---

## 🧠 Technologies Used

* JavaScript (Vanilla)
* HTML5
* CSS3
* Chrome Extension Manifest V3
* Performance APIs
* Network Testing Techniques

---

## 🚀 Future Enhancements

* 📊 Real-time speed graph
* 📈 Stability scoring system
* 🔔 Speed drop alerts
* 📡 Jitter & packet loss analysis
* 🌍 Server auto-selection by latency
* 📤 Export performance reports

---

## 👨‍💻 About the Project

NetPulse was created as a personal initiative to transform curiosity into a practical engineering solution. What started as an experiment to understand how internet speed is calculated evolved into a fully functional tool used daily for monitoring network performance.

This project reflects hands-on experience with frontend development, browser APIs, and real-time performance monitoring, while focusing on real-world usability.

---

## 🤝 Contributing

Contributions, suggestions, and feature requests are welcome. Feel free to fork the repository or open an issue to collaborate.

---

## 📜 License

This project is open for educational and personal use. You may choose to apply an appropriate open-source license as needed.

---

### ⭐ If you find NetPulse useful, consider starring this repository and sharing your feedback!
