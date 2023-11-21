import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
  
  function Signin() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <Card color="transparent" shadow={false} className="w-full md:w-2/3 lg:w-1/3 p-8">
          <Typography variant="h3" color="blue-gray" className="text-center mb-4"> 
            Sign In
          </Typography>
          <Typography color="gray" className="text-center mb-6">
            Welcome! Enter your details to register.
          </Typography>
          <form>
            
            <div className="mb-4">
              <Typography variant="h6" color="blue-gray">
                Your Email
              </Typography>
              <Input
                size="lg"
                placeholder="Enter your email"
                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div className="mb-4">
              <Typography variant="h6" color="blue-gray">
                Password
              </Typography>
              <Input
                type="password"
                size="lg"
                placeholder="**********"
                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree to the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Button className="mt-6 w-full" fullWidth>
              Sign In
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              New to Edumarket?{" "}
              <a href="/signup" className="font-medium text-gray-900">
                Sign Up
              </a>
            </Typography>
          </form>
        </Card>
      </div>
    );
  }
  
  export default Signin;
  