import { Button, CloseButton, Group, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";

const MyForm = () => {
  const createForm = useForm({
    initialValues: {
      code_postal: "",
    },
  });

  const handleSubmit = (values: typeof createForm.values) => {
    console.log(values);
  };
  return (
    <>
      <div>form</div>
      <form
        onSubmit={createForm.onSubmit(handleSubmit)}
        onReset={createForm.onReset}
      >
        <TextInput
          label="CodePostal"
          placeholder="code postal"
          size="md"
          key={createForm.key("code_postal")}
          {...createForm.getInputProps("code_postal")}
          rightSection={
            <CloseButton
              aria-label="clear"
              onClick={() => {
                createForm.setValues({ code_postal: "" });
              }}
            />
          }
        />
        <Group>
          <Button type="submit" color="green">
            Submit
          </Button>
          <Button type="reset">Reset</Button>
        </Group>
      </form>
    </>
  );
};
export default MyForm;
