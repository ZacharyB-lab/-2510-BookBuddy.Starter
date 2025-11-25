import { Link } from "react-router";
import RegisterForm from "./RegisterForm";

export function RegisterPage() {
  /* Test Code
  return (
    <div>
      <h1>Register for an account</h1>
      <div>
        <div>First Name</div>
        <input></input>
      </div>
      <div>
        <div>Last Name</div>
        <input></input>
      </div>
      <div>
        <div>Email</div>
        <input></input>
      </div>
      <div>
        <div>Password</div>
        <input></input>
      </div>
      <div className="register">
        <button>Register</button>
      </div>
      <div>
        <Link to="/login">Already have an account? Log in here</Link>
      </div>
    </div>
  );
}

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [error, setError] = useState(null);

  const tryRegister = async (formData) => {
    setError(null);

    const username = formData.get("username");
    const password = formData.get("password");
    try {
      await register({ username, password });
      navigate("/activities");
    } catch (e) {
      setError(e.message);
    }
  };*/
  return (
    <>
      <h1>Register for an account</h1>
      <form action={tryRegister}>
        <label>
          Username
          <input type="text" name="username" required />
        </label>
        <label>
          Password
          <input type="password" name="password" required />
        </label>
        <button>Register</button>
        {error && <p role="alert">{error}</p>}
      </form>
    </>
  );
}
//<Link to="/login">Already have an account? Log in here.</Link>
