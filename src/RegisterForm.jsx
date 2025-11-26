import axios from "axios";

const RegisterForm = ({ authenticate }) => {
  const register = async (formData) => {
    const email = formData.get("email");
    const username = formData.get("username");
    const password = formData.get("password");
    const user = {
      username,
      email,
      password,
    };
    try {
      const { data } = await axios.post(
        "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register",
        user
      );
      const token = data.token;
      window.localStorage.setItem("token", token);
      authenticate(token);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form action={register}>
      <div>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
      </div>
      <button type="submit"> Register </button>
    </form>
  );
};

export default RegisterForm;
