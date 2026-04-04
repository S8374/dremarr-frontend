export const dashboardStats = [
  { id: 1, label: "Total Views", value: "223", icon: "eye", color: "#3b82f6" },
  { id: 2, label: "Responses", value: "11", icon: "message", color: "#22c55e" },
  { id: 3, label: "Rating", value: "4.9", icon: "star", color: "#f59e0b" },
  { id: 4, label: "Active Listings", value: "2", icon: "list", color: "#a855f7" },
];

export const myListings = [
  {
    id: 1,
    title: "I will fix plumbing issues and install pipes professionally",
    location: "Miami, Fl",
    views: "245 views",
    messages: "04 message",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 2,
    title:
      "Expert Electrical Solutions: Professional Wiring and Installation Services",
    location: "Texas",
    views: "245 views",
    messages: "08 message",
    image:
      "https://images.unsplash.com/photo-1558444458-5cd899262da3?auto=format&fit=crop&q=80&w=400",
  },
];

export const orderHistory = [
  {
    id: 1,
    title: "I will fix plumbing issues and install pipes professionally",
    status: "On-going",
    date: null,
    image:
      "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 2,
    title: "I will fix plumbing issues and install pipes professionally",
    status: "Completed",
    date: "01-01-2025",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=400",
  },
];

export const quickActions = [
  { id: 1, label: "Create new listing", icon: "list-plus", href: "/create-listing", badge: null },
  { id: 2, label: "View messages", icon: "mail", href: "/messages", badge: 3 },
  { id: 3, label: "Check Orders", icon: "shopping-bag", href: "/orders", badge: 2 },
  { id: 4, label: "Edit Profile", icon: "user-pen", href: "/edit-profile", badge: null },
];

export const notifications = [
  {
    id: 1,
    user: "Killian James",
    avatar: "https://i.pravatar.cc/150?u=killan",
    message: "You have received a delivery request from Ahmad Medi.",
    time: "10 mins ago",
    actions: ["Decline", "Accept"],
  },
  {
    id: 2,
    user: "Ahmed Medi",
    avatar: "https://i.pravatar.cc/150?u=ahmed",
    message:
      "We'd love to hear your thoughts on your experience with us. Please take a moment to leave a review!",
    time: "15 mins ago",
    actions: ["Give a review"],
  },
];

export const verifications = [
  { id: 1, label: "Verified License", sublabel: "Verified", icon: "check", color: "#22c55e" },
  { id: 2, label: "Top Rated", sublabel: "Verified", icon: "star", color: "#f59e0b" },
];
