import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { useLoginMutation } from "../app/features/auth/authApi";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [login, { data, isLoading, error: responseError }] = useLoginMutation();

  useEffect(() => {
    if (!data?.status) {
      setError(responseError?.message);
    }
    if (responseError?.data) {
      setError(responseError?.data?.message);
    }
    if (data?.token && data?.user) {
      navigate("/");
    }
  }, [data, responseError, navigate]);
  const handleOnSubmit = (e) => {
    e.preventDefault();

    login({
      email,
      password,
    });
  };

  console.log(data, isLoading, responseError);

  return (
    <div className="grid h-screen place-items-center">
      <form onSubmit={handleOnSubmit} className="flex flex-col gap-4 w-1/4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            id="email1"
            type="email"
            placeholder="email@gmail.com"
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            id="password1"
            type="password"
            required={true}
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Login;
