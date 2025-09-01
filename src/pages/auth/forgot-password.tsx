import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Card, CardBody, Input, Button } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

export const ForgotPassword: React.FC = () => {
  const history = useHistory();
  const [email, setEmail] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [error, setError] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // In a real app, you would send a password reset email
      console.log('Password reset requested for:', email);
      
      // For demo purposes, always succeed
      setIsSubmitted(true);
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
          <h1 className="text-2xl font-bold mb-2">Reset your password</h1>
          <p className="text-foreground-500">We'll send you instructions to reset your password</p>
        </div>

        <Card className="mb-6" disableRipple>
          <CardBody className="p-6">
            {error && (
              <div className="bg-danger-100 text-danger p-3 rounded-medium mb-4 text-sm">
                {error}
              </div>
            )}

            {isSubmitted ? (
              <div className="text-center py-4">
                <div className="bg-success-100 text-success p-3 rounded-medium mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon icon="lucide:check-circle" width={20} height={20} />
                    <span className="font-medium">Email sent!</span>
                  </div>
                  <p className="text-sm">
                    We've sent password reset instructions to {email}
                  </p>
                </div>
                
                <p className="mb-4 text-sm text-foreground-500">
                  Didn't receive the email? Check your spam folder or request another reset.
                </p>
                
                <div className="flex flex-col gap-3">
                  <Button
                    variant="flat"
                    color="primary"
                    onPress={() => setIsSubmitted(false)}
                  >
                    Try again
                  </Button>
                  <Button
                    variant="light"
                    as={Link}
                    to="/login"
                  >
                    Back to login
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  label="Email"
                  type="email"
                  value={email}
                  onValueChange={setEmail}
                  variant="bordered"
                  placeholder="Enter your email address"
                  startContent={<Icon icon="lucide:mail" width={16} height={16} className="text-foreground-400" />}
                  isRequired
                />

                <Button
                  type="submit"
                  color="primary"
                  className="w-full"
                  isLoading={isLoading}
                >
                  {isLoading ? 'Sending...' : 'Reset Password'}
                </Button>
              </form>
            )}
          </CardBody>
        </Card>

        <div className="text-center">
          <p className="text-foreground-500">
            Remember your password?{' '}
            <Link to="/login" className="text-primary font-medium hover:underline">
              Back to login
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};