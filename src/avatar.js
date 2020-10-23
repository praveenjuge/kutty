module.exports = Avatar = () => ({
  ".avatar": {
    "@apply relative h-12 w-12 rounded-full select-none text-center no-underline": {},
    maxWidth: "3rem",
    minWidth: "3rem",
    maxHeight: "3rem",
    minHeight: "3rem",
  },
  ".avatar-initial": {
    "@apply absolute rounded-full inset-0 font-bold text-base uppercase flex items-center justify-center h-full w-full bg-primary-light text-primary no-underline": {},
  },
  ".avatar img": {
    "@apply h-full w-full object-cover rounded-full bg-primary-light": {},
  },
  ".prose .avatar img": {
    "@apply mt-0 mb-0": {},
  },
  ".avatar-icon": {
    "@apply bg-primary-light text-primary flex items-center justify-center": {},
  },
  ".avatar-icon svg": {
    "@apply h-6 w-6": {},
  },
  ".avatar-text": {
    "@apply flex items-center no-underline text-gray-800 font-semibold": {},
  },
  ".avatar-text .avatar": {
    "@apply mr-2": {},
  },
  ".prose .avatar-text p": {
    "@apply mt-0 mb-0": {},
  },
  ".avatar-offline::after, .avatar-online::after, .avatar-busy::after, .avatar-focused::after": {
    content: "''",
    "@apply absolute bottom-0 right-0 w-3 h-3 rounded-full": {},
  },
  ".avatar-offline::after": {
    "@apply bg-gray-500": {},
  },
  ".avatar-online::after": {
    "@apply bg-green-500": {},
  },
  ".avatar-focused::after": {
    "@apply bg-purple-500": {},
  },
  ".avatar-busy::after": {
    "@apply bg-red-500": {},
  },
  ".avatar-xs": {
    "@apply h-6 w-6 !important": {},
    maxWidth: "1.5rem !important",
    minWidth: "1.5rem !important",
    maxHeight: "1.5rem !important",
    minHeight: "1.5rem !important",
  },
  ".avatar-xs.avatar-icon svg": {
    "@apply h-3 w-3 !important": {},
  },
  ".avatar-xs .avatar-initial": {
    "@apply text-xs !important": {},
  },
  ".avatar-sm": {
    "@apply h-8 w-8 !important": {},
    maxWidth: "2rem !important",
    minWidth: "2rem !important",
    maxHeight: "2rem !important",
    minHeight: "2rem !important",
  },
  ".avatar-sm.avatar-icon svg": {
    "@apply h-4 w-4 !important": {},
  },
  ".avatar-sm .avatar-initial": {
    "@apply text-sm !important": {},
  },
  ".avatar-lg": {
    "@apply h-20 w-20 !important": {},
    maxWidth: "5rem !important",
    minWidth: "5rem !important",
    maxHeight: "5rem !important",
    minHeight: "5rem !important",
  },
  ".avatar-lg.avatar-icon svg": {
    "@apply h-10 w-10 !important": {},
  },
  ".avatar-lg .avatar-initial": {
    "@apply text-lg !important": {},
  },
  ".avatar-xl": {
    "@apply h-32 w-32 !important": {},
    maxWidth: "8rem !important",
    minWidth: "8rem !important",
    maxHeight: "8rem !important",
    minHeight: "8rem !important",
  },
  ".avatar-xl.avatar-icon svg": {
    "@apply h-16 w-16 !important": {},
  },
  ".avatar-xl .avatar-initial": {
    "@apply text-3xl !important": {},
  },
});
