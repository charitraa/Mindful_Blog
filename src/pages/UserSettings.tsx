import "../global.css";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  User,
  Mail,
  Lock,
  Camera,
  Check,
  AlertCircle,
  Eye,
  EyeOff,
} from "lucide-react";

interface UserData {
  name: string;
  email: string;
  bio: string;
  avatar: string;
}

interface FormStatus {
  type: "success" | "error" | null;
  message: string;
}

export default function UserSettings() {
  // Profile data
  const [userData, setUserData] = useState<UserData>({
    name: "John Doe",
    email: "john@example.com",
    bio: "Writer, developer, and storyteller. Passionate about technology and innovation.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  });

  // Form states
  const [editProfile, setEditProfile] = useState(false);
  const [profileFormData, setProfileFormData] = useState(userData);
  const [profileStatus, setProfileStatus] = useState<FormStatus>({
    type: null,
    message: "",
  });

  const [emailFormData, setEmailFormData] = useState({
    newEmail: "",
    confirmEmail: "",
    password: "",
  });
  const [emailStatus, setEmailStatus] = useState<FormStatus>({
    type: null,
    message: "",
  });

  const [passwordFormData, setPasswordFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [passwordStatus, setPasswordStatus] = useState<FormStatus>({
    type: null,
    message: "",
  });
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  // Handle profile update
  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setProfileStatus({ type: null, message: "" });

    if (!profileFormData.name.trim()) {
      setProfileStatus({
        type: "error",
        message: "Name cannot be empty",
      });
      return;
    }

    // Simulate API call
    setTimeout(() => {
      setUserData(profileFormData);
      setEditProfile(false);
      setProfileStatus({
        type: "success",
        message: "Profile updated successfully!",
      });

      setTimeout(() => {
        setProfileStatus({ type: null, message: "" });
      }, 3000);
    }, 800);
  };

  // Handle email change
  const handleEmailChange = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailStatus({ type: null, message: "" });

    if (emailFormData.newEmail !== emailFormData.confirmEmail) {
      setEmailStatus({
        type: "error",
        message: "Email addresses don't match",
      });
      return;
    }

    if (!emailFormData.password) {
      setEmailStatus({
        type: "error",
        message: "Please enter your password to confirm",
      });
      return;
    }

    // Simulate API call
    setTimeout(() => {
      setUserData((prev) => ({
        ...prev,
        email: emailFormData.newEmail,
      }));
      setEmailFormData({
        newEmail: "",
        confirmEmail: "",
        password: "",
      });
      setEmailStatus({
        type: "success",
        message: "Email updated successfully! A verification link has been sent.",
      });

      setTimeout(() => {
        setEmailStatus({ type: null, message: "" });
      }, 3000);
    }, 800);
  };

  // Handle password change
  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordStatus({ type: null, message: "" });

    if (passwordFormData.newPassword !== passwordFormData.confirmPassword) {
      setPasswordStatus({
        type: "error",
        message: "New passwords don't match",
      });
      return;
    }

    if (passwordFormData.newPassword.length < 8) {
      setPasswordStatus({
        type: "error",
        message: "Password must be at least 8 characters",
      });
      return;
    }

    // Simulate API call
    setTimeout(() => {
      setPasswordFormData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
      setPasswordStatus({
        type: "success",
        message: "Password changed successfully!",
      });

      setTimeout(() => {
        setPasswordStatus({ type: null, message: "" });
      }, 3000);
    }, 800);
  };

  return (
    <Layout>
      {/* Page Header */}
      <div className="border-b border-border bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-2">Settings</h1>
          <p className="text-lg text-muted-foreground">
            Manage your account and preferences
          </p>
        </div>
      </div>

      {/* Settings Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl">
          {/* Navigation Tabs - Hidden on mobile, could be added for desktop */}
          <div className="space-y-12">
            {/* Profile Section */}
            <section className="border border-border rounded-lg p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Profile Information</h2>
                  <p className="text-sm text-muted-foreground">
                    Update your name, bio, and avatar
                  </p>
                </div>
              </div>

              {!editProfile ? (
                <div className="space-y-6">
                  {/* Avatar Display */}
                  <div className="flex items-center gap-6">
                    <img
                      src={userData.avatar}
                      alt={userData.name}
                      className="h-24 w-24 rounded-full object-cover border-2 border-primary/20"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-1">
                        {userData.name}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {userData.bio}
                      </p>
                      <Button
                        onClick={() => setEditProfile(true)}
                        variant="outline"
                      >
                        Edit Profile
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleProfileUpdate} className="space-y-6">
                  {/* Avatar Section */}
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={profileFormData.avatar}
                        alt={profileFormData.name}
                        className="h-20 w-20 rounded-full object-cover border-2 border-primary/20"
                      />
                      <div>
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          className="flex items-center gap-2"
                        >
                          <Camera className="h-4 w-4" />
                          Change Avatar
                        </Button>
                        <p className="text-xs text-muted-foreground mt-2">
                          JPG, PNG, or GIF. Max 5MB.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Name Field */}
                  <div>
                    <Label htmlFor="name" className="text-base font-semibold">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      value={profileFormData.name}
                      onChange={(e) =>
                        setProfileFormData((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
                      className="mt-2"
                    />
                  </div>

                  {/* Bio Field */}
                  <div>
                    <Label htmlFor="bio" className="text-base font-semibold">
                      Bio
                    </Label>
                    <textarea
                      id="bio"
                      value={profileFormData.bio}
                      onChange={(e) =>
                        setProfileFormData((prev) => ({
                          ...prev,
                          bio: e.target.value,
                        }))
                      }
                      className="w-full mt-2 min-h-24 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                      placeholder="Tell us about yourself..."
                    />
                    <p className="text-xs text-muted-foreground mt-2">
                      {profileFormData.bio.length}/160 characters
                    </p>
                  </div>

                  {/* Status Message */}
                  {profileStatus.type && (
                    <div
                      className={`flex items-center gap-3 p-4 rounded-lg ${
                        profileStatus.type === "success"
                          ? "bg-green-500/10 border border-green-500/20 text-green-700 dark:text-green-400"
                          : "bg-red-500/10 border border-red-500/20 text-red-700 dark:text-red-400"
                      }`}
                    >
                      {profileStatus.type === "success" ? (
                        <Check className="h-5 w-5" />
                      ) : (
                        <AlertCircle className="h-5 w-5" />
                      )}
                      <span className="text-sm">{profileStatus.message}</span>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex gap-3 pt-4">
                    <Button
                      type="submit"
                      className="bg-primary hover:bg-primary/90"
                    >
                      Save Changes
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        setEditProfile(false);
                        setProfileFormData(userData);
                      }}
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              )}
            </section>

            {/* Email Section */}
            <section className="border border-border rounded-lg p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <Mail className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Email Address</h2>
                  <p className="text-sm text-muted-foreground">
                    Current email: <span className="font-medium">{userData.email}</span>
                  </p>
                </div>
              </div>

              <form onSubmit={handleEmailChange} className="space-y-6">
                {/* New Email */}
                <div>
                  <Label
                    htmlFor="newEmail"
                    className="text-base font-semibold"
                  >
                    New Email Address
                  </Label>
                  <Input
                    id="newEmail"
                    type="email"
                    placeholder="newemail@example.com"
                    value={emailFormData.newEmail}
                    onChange={(e) =>
                      setEmailFormData((prev) => ({
                        ...prev,
                        newEmail: e.target.value,
                      }))
                    }
                    className="mt-2"
                    required
                  />
                </div>

                {/* Confirm Email */}
                <div>
                  <Label
                    htmlFor="confirmEmail"
                    className="text-base font-semibold"
                  >
                    Confirm Email Address
                  </Label>
                  <Input
                    id="confirmEmail"
                    type="email"
                    placeholder="newemail@example.com"
                    value={emailFormData.confirmEmail}
                    onChange={(e) =>
                      setEmailFormData((prev) => ({
                        ...prev,
                        confirmEmail: e.target.value,
                      }))
                    }
                    className="mt-2"
                    required
                  />
                </div>

                {/* Password Confirmation */}
                <div>
                  <Label
                    htmlFor="emailPassword"
                    className="text-base font-semibold"
                  >
                    Password
                  </Label>
                  <Input
                    id="emailPassword"
                    type="password"
                    placeholder="••••••••"
                    value={emailFormData.password}
                    onChange={(e) =>
                      setEmailFormData((prev) => ({
                        ...prev,
                        password: e.target.value,
                      }))
                    }
                    className="mt-2"
                    required
                  />
                  <p className="text-xs text-muted-foreground mt-2">
                    For security, enter your password to confirm this change
                  </p>
                </div>

                {/* Status Message */}
                {emailStatus.type && (
                  <div
                    className={`flex items-center gap-3 p-4 rounded-lg ${
                      emailStatus.type === "success"
                        ? "bg-green-500/10 border border-green-500/20 text-green-700 dark:text-green-400"
                        : "bg-red-500/10 border border-red-500/20 text-red-700 dark:text-red-400"
                    }`}
                  >
                    {emailStatus.type === "success" ? (
                      <Check className="h-5 w-5" />
                    ) : (
                      <AlertCircle className="h-5 w-5" />
                    )}
                    <span className="text-sm">{emailStatus.message}</span>
                  </div>
                )}

                <Button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Update Email
                </Button>
              </form>
            </section>

            {/* Password Section */}
            <section className="border border-border rounded-lg p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-orange-500/10 rounded-lg">
                  <Lock className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Password</h2>
                  <p className="text-sm text-muted-foreground">
                    Change your password to keep your account secure
                  </p>
                </div>
              </div>

              <form onSubmit={handlePasswordChange} className="space-y-6">
                {/* Current Password */}
                <div>
                  <Label
                    htmlFor="currentPassword"
                    className="text-base font-semibold"
                  >
                    Current Password
                  </Label>
                  <div className="relative mt-2">
                    <Input
                      id="currentPassword"
                      type={showPassword.current ? "text" : "password"}
                      placeholder="••••••••"
                      value={passwordFormData.currentPassword}
                      onChange={(e) =>
                        setPasswordFormData((prev) => ({
                          ...prev,
                          currentPassword: e.target.value,
                        }))
                      }
                      required
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword((prev) => ({
                          ...prev,
                          current: !prev.current,
                        }))
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showPassword.current ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* New Password */}
                <div>
                  <Label
                    htmlFor="newPassword"
                    className="text-base font-semibold"
                  >
                    New Password
                  </Label>
                  <div className="relative mt-2">
                    <Input
                      id="newPassword"
                      type={showPassword.new ? "text" : "password"}
                      placeholder="••••••••"
                      value={passwordFormData.newPassword}
                      onChange={(e) =>
                        setPasswordFormData((prev) => ({
                          ...prev,
                          newPassword: e.target.value,
                        }))
                      }
                      required
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword((prev) => ({
                          ...prev,
                          new: !prev.new,
                        }))
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showPassword.new ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Confirm Password */}
                <div>
                  <Label
                    htmlFor="confirmPassword"
                    className="text-base font-semibold"
                  >
                    Confirm Password
                  </Label>
                  <div className="relative mt-2">
                    <Input
                      id="confirmPassword"
                      type={showPassword.confirm ? "text" : "password"}
                      placeholder="••••••••"
                      value={passwordFormData.confirmPassword}
                      onChange={(e) =>
                        setPasswordFormData((prev) => ({
                          ...prev,
                          confirmPassword: e.target.value,
                        }))
                      }
                      required
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword((prev) => ({
                          ...prev,
                          confirm: !prev.confirm,
                        }))
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showPassword.confirm ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Password Requirements */}
                <div className="bg-secondary/40 border border-border rounded-lg p-4">
                  <p className="text-sm font-semibold mb-2">
                    Password requirements:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>
                      • At least 8 characters long
                    </li>
                    <li>
                      • Mix of uppercase, lowercase, numbers, and symbols
                    </li>
                    <li>
                      • Different from your current password
                    </li>
                  </ul>
                </div>

                {/* Status Message */}
                {passwordStatus.type && (
                  <div
                    className={`flex items-center gap-3 p-4 rounded-lg ${
                      passwordStatus.type === "success"
                        ? "bg-green-500/10 border border-green-500/20 text-green-700 dark:text-green-400"
                        : "bg-red-500/10 border border-red-500/20 text-red-700 dark:text-red-400"
                    }`}
                  >
                    {passwordStatus.type === "success" ? (
                      <Check className="h-5 w-5" />
                    ) : (
                      <AlertCircle className="h-5 w-5" />
                    )}
                    <span className="text-sm">{passwordStatus.message}</span>
                  </div>
                )}

                <Button
                  type="submit"
                  className="bg-orange-600 hover:bg-orange-700"
                >
                  Update Password
                </Button>
              </form>
            </section>

            {/* Danger Zone */}
            <section className="border border-red-500/20 rounded-lg p-8 bg-red-500/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-red-500/10 rounded-lg">
                  <AlertCircle className="h-5 w-5 text-red-600" />
                </div>
                <h2 className="text-2xl font-bold text-red-600">Danger Zone</h2>
              </div>

              <div className="space-y-4">
                <div className="bg-background border border-border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Delete Account</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Once you delete your account, there is no going back. Please
                    be certain.
                  </p>
                  <Button
                    variant="destructive"
                    className="bg-red-600 hover:bg-red-700"
                  >
                    Delete Account
                  </Button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}
