import { categoryState, textListState } from "../atoms";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { useForm } from "react-hook-form";

interface IForm {
  textItem: string;
}

export default function ControlBox() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IForm>();
  const setTextList = useSetRecoilState(textListState);
  const category = useRecoilValue(categoryState);

  const onSubmit = (data: IForm) => {
    setTextList((current) => [
      { text: data.textItem, category: category, id: Date.now() },
      ...current,
    ]);
    setValue("textItem", "");
  };

  return (
    <div>
      <h3>ControlBox</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("textItem", { required: "필수!!" })} />
        <button>ADD</button>
        <div>{errors && errors.textItem?.message}</div>
      </form>
    </div>
  );
}
