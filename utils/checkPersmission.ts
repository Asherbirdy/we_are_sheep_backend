
export const checkPersmission = (requestUser : any, resourceUserId: any) => {
  //   console.log(requestUser);
  //   console.log(resourceUserId);
  //   console.log(typeof resourceUserId);

  if (requestUser.role === 'admin') return
  if (requestUser.userId === resourceUserId.userId) return

  throw new Error(
    'Not authorized to access this route'
  )
}

