import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Card, CardBody, CardHeader, Input, Button, Checkbox, Divider } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

export const Login: React.FC = () => {
  const history = useHistory();
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // In a real app, you would validate credentials with your API
      console.log('Login attempt:', formData);
      
      // For demo purposes, always succeed
      history.push('/');
    }, 1500);
  };

  return (
    <div className="max-w-md mx-auto py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <Icon icon="lucide:book-open" width={32} height={32} className="text-primary" />
            <span className="font-bold text-2xl">Mindful Blog</span>
          </Link>
          <h1 className="text-2xl font-bold mb-2">Welcome back</h1>
          <p className="text-foreground-500">Sign in to continue to your account</p>
        </div>

        <Card className="mb-6" disableRipple>
          <CardBody className="p-6">
            {error && (
              <div className="bg-danger-100 text-danger p-3 rounded-medium mb-4 text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                variant="bordered"
                placeholder="Enter your email"
                startContent={<Icon icon="lucide:mail" width={16} height={16} className="text-foreground-400" />}
                isRequired
              />

              <Input
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                variant="bordered"
                placeholder="Enter your password"
                startContent={<Icon icon="lucide:lock" width={16} height={16} className="text-foreground-400" />}
                isRequired
              />

              <div className="flex justify-between items-center">
                <Checkbox
                  name="rememberMe"
                  isSelected={formData.rememberMe}
                  onValueChange={checked => setFormData(prev => ({ ...prev, rememberMe: checked }))}
                >
                  <span className="text-sm">Remember me</span>
                </Checkbox>
                <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>

              <Button
                type="submit"
                color="primary"
                className="w-full"
                isLoading={isLoading}
              >
                {isLoading ? 'Signing in...' : 'Sign In'}
              </Button>
            </form>

            <Divider className="my-6" />

            <div className="flex flex-col gap-3">
              <Button
                variant="flat"
                className="w-full"
                startContent={<Icon icon="logos:google-icon" width={18} height={18} />}
              >
                Continue with Google
              </Button>
              <Button
                variant="flat"
                className="w-full"
                startContent={<Icon icon="logos:facebook" width={18} height={18} />}
              >
                Continue with Facebook
              </Button>
            </div>
          </CardBody>
        </Card>

        <div className="text-center">
          <p className="text-foreground-500">
            Don't have an account?{' '}
            <Link to="/signup" className="text-primary font-medium hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};