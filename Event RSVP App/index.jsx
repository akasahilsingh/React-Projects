const { useState } = React;

export function EventRSVPForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [attendees, setAttendees] = useState("");
  const [dietPreference, setDietPreference] = useState("");
  const [additionalGuest, setAdditionalGuest] = useState("No");
  const [showMsg, setShowMsg] = useState(false);
  return (
    <div className="wrapper">
      <h1>Event RSVP Form</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setShowMsg(true);
        }}
      >
        <label htmlFor="name">Name</label>
        <input
          id="name"
          className="input-box"
          type="text"
          required
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          className="input-box"
          type="email"
          required
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="num">Number of Attendies</label>
        <input
          id="num"
          className="input-box"
          type="number"
          required
          min="1"
          placeholder="Number of attendees"
          value={attendees}
          onChange={(e) => setAttendees(e.target.value)}
        />
        <label htmlFor="prefer">Dietary Preferences:</label>
        <input
          id="prefer"
          className="input-box"
          type="text"
          placeholder="Dietery Preferences (Optional)"
          value={dietPreference}
          onChange={(e) =>
            setDietPreference(e.target.value ? e.target.value : "None")
          }
        />
        <label className="check-label">
          <span>Bringing additional guests?</span>
          <input
            type="checkbox"
            id="check"
            checked={additionalGuest === "Yes"}
            onChange={(e) =>
              setAdditionalGuest(e.target.checked ? "Yes" : "No")
            }
          />
        </label>

        <button type="submit">Submit RSVP</button>
      </form>

      {showMsg && (
        <div className="details">
          <h2>RSVP Submitted!</h2>
          <p>
            <span>Name:</span> {name}
          </p>
          <p>
            <span>Email:</span> {email}
          </p>
          <p>
            <span>Number of attendees:</span> {attendees}
          </p>
          <p>
            <span>Dietary preferences:</span>{" "}
            {dietPreference ? dietPreference : "None"}
          </p>
          <p>
            <span>Bringing additional guests:</span> {additionalGuest}
          </p>
        </div>
      )}
    </div>
  );
}
