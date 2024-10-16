function Notifications() {
  return (
    <div className=" overflow-hidden min-h-screen w-full pt-24 pl-1 sm:pl-[270px] text-gray-700 dark:bg-gray-600 dark:text-gray-200">
      <div className="pr-2 sm:pr-6 xl:pr-10">
        <h2 className="text-2xl font-semibold mb-3">Notifications</h2>
        <p className="mb-6">Select when and how you will be notified.</p>
        <div className="p-8 pb-0 mb-4 text-sm min-w-[300px] flex gap-20 rounded-lg bg-gray-50 dark:bg-gray-500">
          <div>
            <h2 className="text-xl font-semibold mb-3">
              General notifications
            </h2>
            <p className=" font-medium">
              Select when you’ll be notified when the following changes occur.
            </p>
          </div>
          <div className="w-full">
            <div className="flex items-center gap-2 py-5 border-b">
              <span className=" font-medium">I’m mentioned in a message</span>
              <button className="ml-auto p-2 border rounded-lg hover:text-gray-400">
                None
              </button>
              <button className="p-2 border rounded-lg hover:text-gray-400">
                In-app
              </button>
              <button className="p-2 border rounded-lg hover:text-gray-400">
                Email
              </button>
            </div>
            <div className="flex items-center gap-2 py-5 border-b">
              <span className=" font-medium">
                Someone replies to any message
              </span>
              <button className="ml-auto p-2 border rounded-lg hover:text-gray-400">
                None
              </button>
              <button className="p-2 border rounded-lg hover:text-gray-400">
                In-app
              </button>
              <button className="p-2 border rounded-lg hover:text-gray-400">
                Email
              </button>
            </div>
            <div className="flex items-center gap-2 py-5 border-b">
              <span className=" font-medium">I’m assigned a task</span>
              <button className="ml-auto p-2 border rounded-lg hover:text-gray-400">
                None
              </button>
              <button className="p-2 border rounded-lg hover:text-gray-400">
                In-app
              </button>
              <button className="p-2 border rounded-lg hover:text-gray-400">
                Email
              </button>
            </div>
            <div className="flex items-center gap-2 py-5 border-b">
              <span className=" font-medium">A task status is updated</span>
              <button className="ml-auto p-2 border rounded-lg hover:text-gray-400">
                None
              </button>
              <button className="p-2 border rounded-lg hover:text-gray-400">
                In-app
              </button>
              <button className="p-2 border rounded-lg hover:text-gray-400">
                Email
              </button>
            </div>
            <div className="flex items-center gap-2 py-5">
              <span className=" font-medium">A task is overdue</span>
              <button className="ml-auto p-2 border rounded-lg hover:text-gray-400">
                None
              </button>
              <button className="p-2 border rounded-lg hover:text-gray-400">
                In-app
              </button>
              <button className="p-2 border rounded-lg hover:text-gray-400">
                Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notifications;
