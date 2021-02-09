const allCouponButtons = document.querySelectorAll('.code-shown')

if (allCouponButtons.length > 0) {
  allCouponButtons.forEach(couponButton => {
    couponButton.addEventListener('click', (e) => {
      // if (e.target.classList.contains('coupon-code')) {
        couponButton.classList.add('visible-code')
      // }
      // e.target.classList.contains('eye')
    })
  })
}