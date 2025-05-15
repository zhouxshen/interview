const allSettled = (promises) => {
  return Promise.all(
    promises.map(p => Promise.resolve(p).then(
      value => ({status: 'fullfied', value}),
      reason => ({status: 'rejected', reason})
    ))
  )
}