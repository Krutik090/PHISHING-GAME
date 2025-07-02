```markdown
# 🎯 Phishing Simulation Game – Awareness Training (Node.js)

This project is a **phishing awareness simulation tool** built using **HTML, CSS, JavaScript**, and served with a **Node.js + Express** backend. It mimics realistic login forms to demonstrate how phishing attacks work and helps train users to identify suspicious behavior.

This is strictly for **educational and internal training** purposes.

---

## ⚠️ Disclaimer

> ❗ **This project is for educational use only.**  
> Do **not** deploy it publicly or use it for unethical, unauthorized, or malicious activities.

---

## 🕹 How It Works

- Simulates a login form (phishing page)
- Users enter dummy credentials
- The Node.js server captures and logs the data (e.g., to a `.txt` or `.csv` file)
- Admins can review submitted data to track awareness results

---

## 📁 Folder Structure


PHISHING-GAME/
├── public/
│   ├── index.html          # Phishing-style login page
│   └── style.css           # Page styling
├── server.js               # Node.js Express server
├── logs/
│   └── captured.txt        # Stores submitted data
├── package.json
├── README.md


---

## 🚀 How to Run Locally

1. **Clone the repository**

   ```bash
   git clone https://github.com/Krutik090/PHISHING-GAME.git
   cd PHISHING-GAME
````

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the Node server**

   ```bash
   node server.js
   ```

4. **Visit in your browser**

   ```
   http://localhost:3000
   ```

5. **Test the form**

   Fill in the fake login form — data will be logged server-side (e.g., in `logs/captured.txt`).

---

## 📚 Use Cases

* Internal security awareness training
* Cybersecurity simulations
* Ethical hacking workshops
* Social engineering demos

---

## ✅ Tech Stack

* **Frontend:** HTML, CSS, JavaScript
* **Backend:** Node.js + Express
* **Data Storage:** File system (optionally upgrade to MongoDB)

---

## 🔒 Best Practices

* Run only in controlled, internal environments
* Use with informed/consented participants only
* Rotate or delete logs regularly
* Never collect real credentials or personal data

---

## 👤 Author

**Krutik Thakar**
🔗 GitHub: [@Krutik090](https://github.com/Krutik090)

---

## 📄 License

This repository is intended solely for **educational and awareness training**.
Use ethically and responsibly.

```

Let me know if you want to:
- Add quiz redirection after login capture
- Automatically send captured data to an admin dashboard
- Include certificate generation after awareness completion

Ready for your next repo when you are! ✅
```
