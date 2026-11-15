
// Thời gian hiện hoa trước khi mờ đi (mili giây). 10000 = 10 giây
const THOI_GIAN_HIEN_HOA = 10000;
 
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
 
  // Sau khoảng thời gian trên: ẩn hoa, chỉ còn nền + lời chúc + thông điệp
  setTimeout(() => {
    document.body.classList.add("only-greeting");
  }, THOI_GIAN_HIEN_HOA);
};
 