interface LayoutProps {
	children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
	return <div className=" mb-[5%] w-full bg-gray-900">{children}</div>;
}
