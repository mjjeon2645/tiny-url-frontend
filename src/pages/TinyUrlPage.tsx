export default function TinyUrlPage() {
  const handleClick = () => {
    //
  };

  return (
    <div>
      <label htmlFor="url-input">URL을 입력하세요</label>
      <input id="url-input" type="text" />
      <button type="button" onClick={handleClick}>변환하기</button>
    </div>
  );
}
