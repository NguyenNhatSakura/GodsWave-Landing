import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const Newsletter = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Subscribed!");
  };

  return (
    <section id="newsletter">
  <hr className="w-11/12 mx-auto" />

  <div className="container py-24 sm:py-32">
    <h3 className="text-center text-4xl md:text-5xl font-bold">
      Nhận{" "}
      <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
        Tin Tức Mỗi Ngày
      </span>
    </h3>
    <p className="text-xl text-muted-foreground text-center mt-4 mb-8">
      Đăng ký để nhận thông báo về bản cập nhật mới, script hot và ưu đãi độc quyền từ GodsWave!
    </p>

    <form
      className="flex flex-col w-full md:flex-row md:w-6/12 lg:w-4/12 mx-auto gap-4 md:gap-2"
      onSubmit={handleSubmit}
    >
      <Input
        placeholder="nhapemailcuaban@gmail.com"
        className="bg-muted/50 dark:bg-muted/80"
        aria-label="email"
      />
      <Button>Đăng ký</Button>
    </form>
  </div>

  <hr className="w-11/12 mx-auto" />
</section>
  );
};
