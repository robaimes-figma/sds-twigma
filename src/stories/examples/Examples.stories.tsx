import type { Meta, StoryObj } from "@storybook/react";
import { FAQs } from "../../examples/FAQs";
import { PanelSections } from "../../examples/PanelSections";
import { PricingGrid } from "../../examples/PricingGrid";
import { ProductDetails } from "../../examples/ProductDetails";
import { ProductGrid } from "../../examples/ProductGrid";
import { WelcomeHero } from "../../examples/WelcomeHero";

/**
 * Full-page compositions assembled from SDS primitives — handy reference for
 * how the pieces come together into real screens.
 */
const meta: Meta = {
  title: "SDS Examples/Pages",
  parameters: { layout: "fullscreen" },
};
export default meta;
type Story = StoryObj;

export const StoryWelcomeHero: Story = {
  name: "Welcome Hero",
  render: () => <WelcomeHero />,
};

export const StoryPanelSections: Story = {
  name: "Panel Sections",
  render: () => <PanelSections />,
};

export const StoryPricingGrid: Story = {
  name: "Pricing Grid",
  render: () => <PricingGrid />,
};

export const StoryFAQs: Story = {
  name: "FAQs",
  render: () => <FAQs />,
};

export const StoryProductDetails: Story = {
  name: "Product Details",
  render: () => <ProductDetails />,
};

export const StoryProductGrid: Story = {
  name: "Product Grid",
  render: () => <ProductGrid />,
};
