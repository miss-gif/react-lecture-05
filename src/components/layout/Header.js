export const Header = ({ login }) => {
  console.log("Header Header Header");
  return (
    <header className="header">{login ? "정보수정" : "로그인필요"}</header>
  );
};
