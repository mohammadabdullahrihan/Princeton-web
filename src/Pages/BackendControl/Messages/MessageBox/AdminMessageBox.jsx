import AdminMessages from "./AdminMessages";

const AdminMessageBox = () => {
  return (
    <section>
      <div>
         <h1 className="text-2xl font-bold text-center underline">Message Categories & Messages</h1>
      </div>
      <div className="mt-10">
        <AdminMessages></AdminMessages>
      </div>
    </section>
  );
};

export default AdminMessageBox;
