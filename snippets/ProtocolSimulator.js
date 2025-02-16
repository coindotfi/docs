import React, { useState } from "react";

// Hard-coded protocol parameters for the interactive RWP challenge.
const PASSWORD = "LOVE";
const EXPECTED_DIRECTIONS = {
  L: "Right",
  O: "Down",
  V: "Right",
  E: "Down",
};

// Available directions for the challenge.
const DIRECTIONS = ["Up", "Down", "Left", "Right"];

// A simple simulation of a full protocol run (dummy output).
function runFullProtocolSimulation() {
  // For demo purposes, we simulate some protocol steps with dummy delays.
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        nonce: "abc123",
        entropy: [23, 45, 67, 89],
        primes: [
          { prime: 101, holy_prime: 203, bits: 7 },
          { prime: 103, holy_prime: 207, bits: 7 },
        ],
        root_commitment: "def456",
        challenges: [111, 222, 333, 444, 555],
        proof: "deadbeef",
        verification_result: true,
      });
    }, 1500);
  });
}

const ProtocolSimulator = () => {
  // State for the interactive challenge responses.
  const [responses, setResponses] = useState({});
  const [challengeResult, setChallengeResult] = useState(null);

  // State for full protocol simulation.
  const [simulationResult, setSimulationResult] = useState(null);
  const [simulating, setSimulating] = useState(false);

  // Handler for changing a response.
  const handleChange = (char, direction) => {
    setResponses({ ...responses, [char]: direction });
  };

  // Handler to check responses.
  const checkResponses = () => {
    let allCorrect = true;
    for (let char of PASSWORD) {
      if (responses[char] !== EXPECTED_DIRECTIONS[char]) {
        allCorrect = false;
        break;
      }
    }
    setChallengeResult(allCorrect);
  };

  // Handler to run the full simulation.
  const runSimulation = async () => {
    setSimulating(true);
    const result = await runFullProtocolSimulation();
    setSimulationResult(result);
    setSimulating(false);
  };

  return (
    <div style={{ marginTop: "2rem", padding: "1rem", border: "1px solid var(--text-color)", borderRadius: "8px" }}>
      <h2>Protocol Simulator</h2>
      <h3>Interactive RWP Challenge</h3>
      <p>
        For the password <strong>{PASSWORD}</strong>, please select the direction corresponding to each character.
      </p>
      {PASSWORD.split("").map((char, index) => (
        <div key={index} style={{ marginBottom: "1rem" }}>
          <div>
            <strong>Character: {char}</strong> (Expected color:{" "}
            <span style={{ color: `var(--qotp-${EXPECTED_DIRECTIONS[char].toLowerCase() === "down" ? "green" : "yellow"})` }}>
              {EXPECTED_DIRECTIONS[char] === "Down" ? "Green" : "Yellow"}
            </span>
            )
          </div>
          <div>
            {DIRECTIONS.map((dir) => (
              <label key={dir}>
                <input
                  type="radio"
                  name={char}
                  value={dir}
                  onChange={(e) => handleChange(char, e.target.value)}
                  checked={responses[char] === dir}
                />{" "}
                {dir}
              </label>
            ))}
          </div>
        </div>
      ))}
      <button onClick={checkResponses} style={{ padding: "0.5rem 1rem", fontWeight: "var(--font-bold)" }}>
        Check Answers
      </button>
      {challengeResult !== null && (
        <div className="challenge-result" style={{ marginTop: "1rem", color: challengeResult ? "green" : "red" }}>
          {challengeResult ? "RWP Verification Successful!" : "RWP Verification Failed. Please try again."}
        </div>
      )}

      <hr style={{ margin: "2rem 0" }} />

      <h3>Fullmen Protocol Simulation</h3>
      <button onClick={runSimulation} style={{ padding: "0.5rem 1rem", fontWeight: "var(--font-bold)" }}>
        {simulating ? "Simulating..." : "Run Protocol Simulation"}
      </button>
      {simulationResult && (
        <div className="simulation-result" style={{ marginTop: "1rem", fontFamily: "monospace", fontSize: "0.9em" }}>
          <pre>{JSON.stringify(simulationResult, null, 4)}</pre>
        </div>
      )}
    </div>
  );
};

export default ProtocolSimulator;
