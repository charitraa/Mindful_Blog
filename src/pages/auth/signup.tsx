import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Card, CardBody, Input, Button, Checkbox, Divider } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

export const Signup: React.FC = () => {
  const history = useHistory();
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
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

    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    if (!formData.agreeTerms) {
      setError("You must agree to the terms and conditions");
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // In a real app, you would register the user with your API
      console.log('Signup attempt:', formData);
      
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
          <h1 className="text-2xl font-bold mb-2">Create your account</h1>
          <p className="text-foreground-500">Join our community of writers and readers</p>
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
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                variant="bordered"
                placeholder="Enter your full name"
                startContent={<Icon icon="lucide:user" width={16} height={16} className="text-foreground-400" />}
                isRequired
              />

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
                placeholder="Create a password"
                startContent={<Icon icon="lucide:lock" width={16} height={16} className="text-foreground-400" />}
                isRequired
              />

              <Input
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                variant="bordered"
                placeholder="Confirm your password"
                startContent={<Icon icon="lucide:lock" width={16} height={16} className="text-foreground-400" />}
                isRequired
              />

              <Checkbox
                name="agreeTerms"
                isSelected={formData.agreeTerms}
                onValueChange={checked => setFormData(prev => ({ ...prev, agreeTerms: checked }))}
              >
                <span className="text-sm">
                  I agree to the{' '}
                  <Link to="#" className="text-primary hover:underline">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link to="#" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>
                </span>
              </Checkbox>

              <Button
                type="submit"
                color="primary"
                className="w-full"
                isLoading={isLoading}
              >
                {isLoading ? 'Creating account...' : 'Sign Up'}
              </Button>
            </form>

            <Divider className="my-6" />

            <div className="flex flex-col gap-3">
              <Button
                variant="flat"
                className="w-full"
                startContent={<Icon icon="logos:google-icon" width={18} height={18} />}
              >
                Sign up with Google
              </Button>
              <Button
                variant="flat"
                className="w-full"
                startContent={<Icon icon="logos:facebook" width={18} height={18} />}
              >
                Sign up with Facebook
              </Button>
            </div>
          </CardBody>
        </Card>

        <div className="text-center">
          <p className="text-foreground-500">
            Already have an account?{' '}
            <Link to="/login" className="text-primary font-medium hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};