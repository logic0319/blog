import Link from "next/link";
export default function NotFound() {
  return (
    <>
      <div>내용을 찾을 수 없습니다.(URL을 확인해 주세요)</div>
      <Link href="/">홈으로</Link>
    </>
  );
}
